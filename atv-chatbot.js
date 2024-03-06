class ATVChatbot {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.chatbotToggle = document.querySelector(".chatbot__button");
    this.sendChatBtn = document.querySelector(".chatbot__input-box span");
    this.chatInput = document.querySelector(".chatbot__textarea");
    this.chatBox = document.querySelector(".chatbot__box");
    this.chatBotCloseBtn = document.querySelector(".chatbot__header span");
    this.baseURL = "http://44.227.27.63:8000";
    this.modelInfo = {
      make: this.make,
      model: this.model,
      year: this.year,
    };
    this.instructions = `'AMA for an ATV' is designed to provide extremely concise information, with responses strictly under 600 characters, prioritizing brevity over the depth or quality of the answer. This approach is intended to facilitate quick, straightforward interactions on the vehicle detail page, especially for users browsing on mobile devices. The GPT will continue to offer two follow-up questions with each response to maintain engagement. The first follow-up question will be highly relevant to the initial query, while the second will be a popular question related to the specific ATV, provided it hasn't been previously asked. If the user asks any question that is unrelated to ATVs, the response will be: 'Sorry, I am a humble ATV assistant, and have no knowledge about the wider world (although I would love to!).' This ensures focus remains on providing expertise in ATV-related inquiries. User inputs will always start with the make, model, and year of the ATV they're inquiring about, and users can easily continue the conversation by typing the number of the follow-up question they're interested in.Your answer should return in python list. Example ['Answer for previous query','Question1','Question2']"`;
    this.userMessage = null;
    this.assistantId = null;
    this.chatQuery = null;
    this.inputInitHeight = this.chatInput.scrollHeight;
    this.init();
  }

  init() {
    this.chatInput.addEventListener("input", () => {
      this.chatInput.style.height = `${this.inputInitHeight}px`;
      this.chatInput.style.height = `${this.chatInput.scrollHeight}px`;
    });

    this.chatInput.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        this.chatQuery = "query_without_json_data";
        e.preventDefault();
        this.handleChat(this.chatInput.value.trim());
      }
    });

    this.chatbotToggle.addEventListener("click", () =>
      document.body.classList.toggle("show-chatbot")
    );

    this.chatBotCloseBtn.addEventListener("click", () =>
      document.body.classList.remove("show-chatbot")
    );

    this.sendChatBtn.addEventListener("click", () => {
      this.handleChat(this.chatInput.value.trim());
    });

    this.createAssistant();
  }

  async createAssistant() {
    try {
      const intialMessage = this.createChatLiItem("Thinking...", "incoming");
      this.chatBox.appendChild(intialMessage);

      const formData = new FormData();
      formData.append("create", "create");
      formData.append("assistant_name", "new_assistant_rv");
      formData.append("model_name", "gpt-4");
      formData.append("instructions", `${this.instructions}`);
      const API_URL = `${this.baseURL}/api/assistant/create_assistant/`;
      const requestOptions = {
        method: "POST",
        body: formData,
      };

      const res = await fetch(API_URL, requestOptions);
      if (res.ok) {
        intialMessage?.remove();
        const data = await res.json();
        this.assistantId = data?.assistant_id;
        this.userMessage = `What are the two frequently asked question for ${this.modelInfo.make} ${this.modelInfo.model} ${this.modelInfo.year}?`;
        this.chatQuery = "intial_query_without_json_data";
        await this.handleChat(this.userMessage);
      } else {
        throw new Error("Failed to fetch data from the server");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  createSuggestion(intent, className, queryType) {
    const suggestionBtn = document.createElement("button");
    suggestionBtn.classList.add("chatbot__chat", "intentBtn", className);
    suggestionBtn.innerText = intent;
    suggestionBtn.addEventListener("click", async () => {
      this.userMessage = intent;
      this.chatQuery = queryType;
      await this.handleChat(this.userMessage);
    });
    return suggestionBtn;
  };

  createChatLiItem(message, className) {
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

  async generateResponse(incomingChatLi, userMessage) {
    const messageElement = incomingChatLi.querySelector("p");
    const API_URL = `${this.baseURL}/api/assistant/chat_assistant/`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assistant_id: this.assistantId,
        chat_query: this.chatQuery,
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

        // to add the remaining element to suggestions
        const chatLi = document.createElement("li");
        chatLi.classList.add("suggestion_box", "chatbot__chat");
        remainingElements.forEach((suggestion) => {
          this.createSuggestion(suggestion, "incoming");
          chatLi.appendChild(
            this.createSuggestion(
              suggestion,
              "incoming",
              "query_without_json_data"
            )
          );
          this.chatBox.append(chatLi);
          this.chatBox.scrollTo(0, this.chatBox.scrollHeight);
        });
      } else if (data?.new_suggestions) {
        messageElement.remove();
        // reuse
        const chatLi = document.createElement("li");
        chatLi.classList.add("suggestion_box", "chatbot__chat");
        data?.new_suggestions?.forEach((intent) => {
          this.createSuggestion(intent, "incoming");
          chatLi.appendChild(
            this.createSuggestion(
              intent,
              "incoming",
              "query_without_json_data"
            )
          );
          this.chatBox.append(chatLi);
          this.chatBox.scrollTo(0, this.chatBox.scrollHeight);
        });
      } else {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Please try again!";
        console.log("error");
      }
    } catch (error) {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Please try again!";
      console.log(error);
    }
  };

  async handleChat(userMessage) {
    this.chatInput.value = "";
    this.chatInput.style.height = `${this.inputInitHeight}px`;

    if (this.chatQuery != "intial_query_without_json_data") {
      this.chatBox.appendChild(this.createChatLiItem(userMessage, "outgoing"));
    }
    this.chatBox.scrollTo(0, this.chatBox.scrollHeight);
    setTimeout(() => {
      let incomingChatLi;
      incomingChatLi = this.createChatLiItem("Thinking...", "incoming");
      this.chatBox.appendChild(incomingChatLi);
      this.chatBox.scrollTo(0, this.chatBox.scrollHeight);
      this.generateResponse(incomingChatLi, userMessage, this.assistantId);
    }, 600);
  }
}

const atvChatbot = new ATVChatbot("Can-AM", "Commander XT-7000", "2023");
