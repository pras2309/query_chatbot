const chatbotToggle = document.querySelector(".chatbot__button");
const sendChatBtn = document.querySelector(".chatbot__input-box span");
const chatInput = document.querySelector(".chatbot__textarea");
const chatBox = document.querySelector(".chatbot__box");
const chatbotCloseBtn = document.querySelector(".chatbot__header span");

// const baseURL = "https://pankaj231.pythonanywhere.com";
const baseURL = "http://127.0.0.1:8000";
const modelInfo = {
  make: "Can-AM",
  model: "Commander XT-7000",
  year: "2023",
};
const instructions = `'AMA for an ATV' is designed to provide extremely concise information, with responses strictly under 600 characters, prioritizing brevity over the depth or quality of the answer. This approach is intended to facilitate quick, straightforward interactions on the vehicle detail page, especially for users browsing on mobile devices. The GPT will continue to offer two follow-up questions with each response to maintain engagement. The first follow-up question will be highly relevant to the initial query, while the second will be a popular question related to the specific ATV, provided it hasn't been previously asked. If the user asks any question that is unrelated to ATVs, the response will be: 'Sorry, I am a humble ATV assistant, and have no knowledge about the wider world (although I would love to!).' This ensures focus remains on providing expertise in ATV-related inquiries. User inputs will always start with the make, model, and year of the ATV they're inquiring about, and users can easily continue the conversation by typing the number of the follow-up question they're interested in.Your answer should return in python list. Example ['Answer for previous query','Question1','Question2']"`;
let userMessage = null;
let assistantId = null;
let chatQuery = null;

const inputInitHeight = chatInput.scrollHeight;
const createAssistant = async () => {
  try {
    const intialMessage = createChatLi("Thinking...", "incoming");
    chatBox.appendChild(intialMessage);

    const formData = new FormData();
    formData.append("create", "create");
    formData.append("assistant_name", "new_assistant_pankaj");
    formData.append("model_name", "gpt-3.5-turbo");
    formData.append("instructions", `${instructions}`);
    const API_URL = `${baseURL}/api/assistant/create_assistant/`;
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    const res = await fetch(API_URL, requestOptions);
    if (res.ok) {
      intialMessage?.remove();
      const data = await res.json();
      assistantId = data?.assistant_id;
      userMessage = `What are the two frequently asked question for ${modelInfo.make} ${modelInfo.model} ${modelInfo.year}?`;
      chatQuery = "intial_query_without_json_data";
      await handleChat(userMessage);
    } else {
      throw new Error("Failed to fetch data from the server");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// to create suggesstions and intents elements
const createSuggestionBtn = (intent, className, queryType) => {
  const suggestionBtn = document.createElement("button");
  suggestionBtn.classList.add("chatbot__chat", "intentBtn", className);
  suggestionBtn.innerText = intent;
  suggestionBtn.addEventListener("click", async () => {
    userMessage = intent;
    chatQuery = queryType;
    await handleChat(userMessage);
  });
  return suggestionBtn;
};
// to create list elements and add messages
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chatbot__chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span> <p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = async (incomingChatLi, userMessage) => {
  const messageElement = incomingChatLi.querySelector("p");
  const API_URL = `${baseURL}/api/assistant/chat_assistant/`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      assistant_id: assistantId,
      chat_query: chatQuery,
      instructions: userMessage,
    }),
  };
  try {
    const res = await fetch(API_URL, requestOptions);
    const data = await res.json();
    if (data?.answer) {
      let firstElement = data?.answer.slice(0, 1);
      let remainingElements = data?.answer.slice(1);
      messageElement.textContent = firstElement;

      // to add the remaining element to suggesstion
      const chatLi = document.createElement("li");
      chatLi.classList.add("suggestion_box", "chatbot__chat");
      remainingElements.forEach((suggesstion) => {
        createSuggestionBtn(suggesstion, "incoming");
        chatLi.appendChild(
          createSuggestionBtn(
            suggesstion,
            "incoming",
            "query_without_json_data"
          )
        );
        chatBox.append(chatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
      });
    } else if (data?.new_suggestions) {
      messageElement.remove();
      const chatLi = document.createElement("li");
      chatLi.classList.add("suggestion_box", "chatbot__chat");
      data?.new_suggestions?.forEach((inten) => {
        createSuggestionBtn(inten, "incoming");
        chatLi.appendChild(
          createSuggestionBtn(inten, "incoming", "query_without_json_data")
        );
        chatBox.append(chatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
      });
    } else {
      messageElement.remove();
    }
  } catch (error) {
    messageElement.classList.add("error");
    messageElement.textContent = "Oops! Please try again!";
    console.log(error);
  }
};

const handleChat = async (userMessage) => {
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  if (chatQuery != "intial_query_without_json_data") {
    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
  }
  chatBox.scrollTo(0, chatBox.scrollHeight);
  setTimeout(() => {
    let incomingChatLi;
    incomingChatLi = createChatLi("Thinking...", "incoming");
    chatBox.appendChild(incomingChatLi);
    chatBox.scrollTo(0, chatBox.scrollHeight);
    generateResponse(incomingChatLi, userMessage, assistantId);
  }, 600);
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});
chatInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    chatQuery = "query_without_json_data";
    e.preventDefault();
    handleChat(chatInput.value.trim());
  }
});

chatbotToggle.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
sendChatBtn.addEventListener("click", () => {
  handleChat(chatInput.value.trim());
});
