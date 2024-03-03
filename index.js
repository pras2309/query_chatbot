const chatbotToggle = document.querySelector(".chatbot__button");
const sendChatBtn = document.querySelector(".chatbot__input-box span");
const chatInput = document.querySelector(".chatbot__textarea");
const chatBox = document.querySelector(".chatbot__box");
const chatbotCloseBtn = document.querySelector(".chatbot__header span");

const baseURL = "pankaj231.pythonanywhere.com";
const jsonFile = {
  meta: {
    alerts: [],
    warnings: [],
    precision: 3,
    engine: {
      name: "rvads",
      type: "elasticsearch",
    },
    page: {
      current: 1,
      total_pages: 2,
      total_results: 48,
      size: 38,
    },
  },
  results: [
    {
      id: {
        raw: "5021893084",
      },
      year: {
        raw: 2022,
      },
      floorplan_mediaid: {
        raw: "62ab93a6678d550a4c7d3f63",
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 56487,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2022-forest-river-rv-cardinal-limited-366dvle-1893079-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002241997\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022NEW PRICED BELOW USED PRICING\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5021893084,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "1",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2022-Forest+River+Rv-Cardinal+Limited+366DVLE-5021893084",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "62a0748d51ec1863fa1a524f",
          "62ab219dec82c84cda07f1b5",
          "62ab21a0bc924b7ab5571940",
          "62ab21a2ceb65f77995270f2",
          "62ab21a43766b5479e5dd3c6",
          "62ab21a68ec8174e4a5ea710",
          "62ab21a7a175fd52d071a028",
          "62ab21aaad40bb40f4519120",
          "62ab21acba63a97ff634aa12",
          "62ab21aebe7266196b0fabeb",
          "62ab21b0ad40bb40f4519122",
          "62ab21b13766b5479e5dd3c9",
          "62ab21b3822f014d2f6f14b3",
          "62ab21b5a175fd52d071a031",
          "62ab21b786c54e01d06c86d5",
          "62ab21b8721a94691a46b815",
          "62ab21ba6e4e4a122659230e",
          "62ab21bcceb65f77995270fd",
          "62ab21beb31be60b013182a0",
          "62ab21c01ec00d7d1e5b05a9",
          "62ab21c5ec82c84cda07f1be",
          "62ab21cae2efe12029454119",
          "62ab21d656ad775c8a68fe55",
          "62ab21e60f8361627838179f",
          "62ab21fbdb00f779403728dd",
          "62ab2215c121b70a9b055da8",
          "62ab222ddf0ce611e74053a9",
          "62ab224801a50e55bc268f80",
          "62ab22639872560f571210ce",
          "62ab227ea441905f5266a083",
          "62ab229921cceb3b552e7674",
          "62ab22b321cceb3b552e7677",
          "62ab22cdbdd85248210643e4",
          "62ab22e760aa17164468a179",
          "62ab23027469357583707045",
          "62ab231c26b5c10c8e3ac39d",
          "62ab2336a1f0774aff17ac47",
          "62ab234e71356150cf65988d",
          "62ab2363a5634d02fe48c6cd",
          "62ab23795cb69d7ae509442d",
          "62ab2390f1616a2e53515efc",
          "62ab23a867fd760e3c584b05",
          "62ab23bc0d9c1f78382076f0",
          "62ab23d04bdef043d87bd6a3",
          "62ab23e27065745e2c5c4d0f",
          "62ab23f5efb054328a401f94",
          "62ab2407addf777ebd135c27",
          "62ab2417aa6077031a14f952",
          "62ab24271e2c757c9a45c8a9",
          "62ab24395f06d4201b478b61",
          "62ab2449eac93727327fc910",
          "62ab2459aa92061b365d9336",
          "62ab24681702254d636a622f",
          "62ab2475646cce6fa3198812",
          "62ab2480fc2c6c39506b5a71",
          "62ab248bb2ef8d16d54ae18e",
          "62ab2495eac93727327fc922",
          "62ab249e646cce6fa3198823",
          "62ab24a57defcf604778edfc",
          "62ab24ac646cce6fa3198825",
          "62ab24b4370cf8254e44d070",
          "62ab24bbeac93727327fc928",
          "62ab24c1e380b338a4551954",
          "62ab24cbe87f121ba57946d6",
          "62ab24d1bdac46034a7d700a",
          "62ab24d5feefb664a475d237",
          "62ab24d9ebadf812f9299157",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Cardinal Limited 366DVLE"],
      },
      model_facet: {
        raw: ["CARDINAL LIMITED|764977438"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2022-06-08T10:06:05+00:00",
      },
      create_date_formatted: {
        raw: "Jun 8 2022",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["366DVLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:true,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:true}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2022 Forest River RV Cardinal Limited 366DVLE, \u003Cp\u003EForest River Cardinal Limited fifth wheel 366DVLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EKing Bed Slide\u003C/li\u003E",
        snippet:
          "2022 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Cardinal Limited 366DVLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Cardinal Limited fifth wheel 366DVLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;King Bed Slide\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 67,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 1,
      mfr_serial_num: {
        raw: null,
      },
      _meta: {
        id: "5021893084",
        engine: "rvads",
        score: 92.93145,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5025558495",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 149995,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-riverstone-41rl-2151472-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u0022111997\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022THIS IS BELOW COST!!!\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5025558495,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "1",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-RiverStone+41RL-5025558495",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "641bfc02ea5b081eb74d3468",
          "641bfc03e702e22ebe6b2633",
          "641bfc0343b25b2a6a6ca5bf",
          "641bfc04e702e22ebe6b2635",
          "641bfc0596ad7627d554f304",
          "641bfc06011b1e4881753e3f",
          "641bfc0696ad7627d554f307",
          "641bfc07ea5b081eb74d346f",
          "641bfc0849b73742b843490c",
          "641bfc0849b73742b843490e",
          "641bfc0949b73742b8434910",
          "641bfc09011b1e4881753e43",
          "641bfc0aff990700bb2fa5d4",
          "641bfc0aff990700bb2fa5d6",
          "641bfc0bff990700bb2fa5d8",
          "641bfc0cff990700bb2fa5da",
          "641bfc0cff990700bb2fa5dc",
          "641bfc0c8e53424cb774cafa",
          "641bfc0d011b1e4881753e4a",
          "641bfc0d8e53424cb774cafc",
          "641bfc0e29a54f7ea91f4b4a",
          "641bfc0e29a54f7ea91f4b4c",
          "641bfc0f8e53424cb774cafe",
          "641bfc0f011b1e4881753e4e",
          "641bfc1043b25b2a6a6ca5cf",
          "641bfc108e53424cb774cb02",
          "641bfc1129a54f7ea91f4b51",
          "641bfc1129a54f7ea91f4b53",
          "641bfc120e37c356733afeee",
          "641bfc120e37c356733afef0",
          "641bfc1396ad7627d554f316",
          "641bfc1496ad7627d554f318",
          "641bfc14ea5b081eb74d3482",
          "641bfc15ea5b081eb74d3484",
          "641bfc15ea5b081eb74d3486",
          "65ba3691e74db4232b604c38",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["RiverStone 41RL"],
      },
      model_facet: {
        raw: ["RIVERSTONE|764968309"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-03-23T07:13:34+00:00",
      },
      create_date_formatted: {
        raw: "Mar 23 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["41RL"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:true}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV RiverStone 41RL, \u003Cp\u003EForest River RiverStone fifth wheel 41RL highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EFour Slide Outs\u003C/li\u003E \u003Cli\u003EFireplace\u003C/li\u003E",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E 41RL, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E fifth wheel 41RL highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Four Slide Outs\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Fireplace\u0026lt;\u0026#x2F;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 36,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 2,
      mfr_serial_num: {
        raw: "4X4FRS835P0003846",
      },
      _meta: {
        id: "5025558495",
        engine: "rvads",
        score: 188.07632,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789963",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 15499,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192135-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002210849\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022On Sale Now\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5026789963,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026789963",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d67898c0a7a73f6321be1",
          "648d678c61eb72398557a9c3",
          "648d678f34926b7ad07ab2fa",
          "648d679261eb72398557a9c5",
          "648d67942891715e35146110",
          "648d67978c0a7a73f6321bed",
          "648d679861eb72398557a9c9",
          "648d679a61eb72398557a9cb",
          "648d679c2891715e35146116",
          "648d679ec61ae1285a382eb9",
          "648d67a034926b7ad07ab306",
          "648d67a2c61ae1285a382ebd",
          "648eaa7cd1a82d131029178c",
          "648d67e1fd189318f72888b5",
          "648d67e305b5073c8818e14a",
          "648d67e6ea88130d123c40cf",
          "648d67e805b5073c8818e14e",
          "648d67ea473194178954642b",
          "648d67edc11b926ad5584b28",
          "648d67efc26fbb6e39513e0b",
          "648d67f2c26fbb6e39513e0d",
          "648d67f5c11b926ad5584b2f",
          "648d67f820f8f26d335ab4c5",
          "648d67fb19ac4365976ac6ba",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:59:55+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 24,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 3,
      mfr_serial_num: {
        raw: "5ZT2ZKEC5PG404182",
      },
      _meta: {
        id: "5026789963",
        engine: "rvads",
        score: 100.83321,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789961",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 16995,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192143-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002211897\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022On Sale Now\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5026789961,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026789961",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d678a5510771bc0198795",
          "648d678d8c0a7a73f6321be5",
          "648d678f076e7b04c7255e3f",
          "648d6791076e7b04c7255e44",
          "648d6793076e7b04c7255e49",
          "648d67968c0a7a73f6321beb",
          "648d6797f9f0f60f033e1fff",
          "648d6799c61ae1285a382eb6",
          "648d679b05b5073c8818e140",
          "648d679d8c0a7a73f6321bf4",
          "648d679f2891715e35146118",
          "648d67a134926b7ad07ab308",
          "648d67a3c61ae1285a382ebf",
          "648d67e0fd189318f72888b3",
          "648d67e2e7369c658a344fae",
          "648d67e54731941789546427",
          "648d67e7fd189318f72888ba",
          "648d67e98791af35877dbc40",
          "648d67ebfd189318f72888be",
          "648d67ee8791af35877dbc45",
          "648d67f0fd189318f72888c3",
          "648d67f4c11b926ad5584b2d",
          "648d67f74731941789546432",
          "648d67f94731941789546436",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:59:54+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 24,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 4,
      mfr_serial_num: {
        raw: "5ZT2ZKEC4PG404190",
      },
      _meta: {
        id: "5026789961",
        engine: "rvads",
        score: 100.83321,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789954",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 15499,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192145-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002210849\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022On Sale Now\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5026789954,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026789954",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d6762bcc8685e9177361a",
          "648d67645652706767464ffe",
          "648d676896feca0d712ce864",
          "648d676b2b2d02159266c5b5",
          "648d676f565270676746500a",
          "648d67722fc469291359b535",
          "648d67762fc469291359b539",
          "648d677996feca0d712ce874",
          "648d677c96feca0d712ce877",
          "648d677e8d23d20eee196dd3",
          "648d678c1f3f696ab71fd5b6",
          "648d678f7354df262c519f25",
          "648d67912fc469291359b54b",
          "648d67948d23d20eee196ddc",
          "648d67972fc469291359b551",
          "648d67991da91975ac772377",
          "648d679b1da91975ac77237a",
          "648d679d67404719bf5a912a",
          "648d679f2fc469291359b556",
          "648d67a207eece27065b7dcf",
          "648d67a57354df262c519f35",
          "648d67a867404719bf5a9139",
          "648d67aa1da91975ac772387",
          "648d67e81b3f7b4ed860c24c",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:59:37+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 24,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 5,
      mfr_serial_num: {
        raw: "5ZT2ZKEC8PG404192",
      },
      _meta: {
        id: "5026789954",
        engine: "rvads",
        score: 100.83321,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789943",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 16995,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192141-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002211897\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022Financing\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5026789943,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026789943",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d6761572f57255c1e0b7e",
          "648d6765572f57255c1e0b81",
          "648d67684026da2ebf70340d",
          "648d676cdde1371a12608287",
          "648d676f7252be142b211fef",
          "648d6771b9dca56c5709c7e0",
          "648d6773076e7b04c7255e14",
          "648d6776572f57255c1e0b92",
          "648d677855d10d0c937d4a10",
          "648d677bbe79e84b156046e0",
          "648d677d4026da2ebf703426",
          "648d677edde1371a1260829c",
          "648d678032e9446194677845",
          "648d6782dde1371a126082a2",
          "648d6784076e7b04c7255e2d",
          "648d6786b9dca56c5709c800",
          "648d678755d10d0c937d4a25",
          "648d678abe79e84b156046fb",
          "648d678c076e7b04c7255e39",
          "648d678e076e7b04c7255e3d",
          "648d6790dde1371a126082bc",
          "648d6792dde1371a126082bf",
          "648d6794fbedc16ac42c0430",
          "648d6796786fbb26ad299a98",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:58:14+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 24,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 6,
      mfr_serial_num: {
        raw: "5ZT2ZKEC6PG404188",
      },
      _meta: {
        id: "5026789943",
        engine: "rvads",
        score: 100.83321,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789939",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 15995,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192137-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002211197\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022}",
      },
      ad_id: {
        raw: 5026789939,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026789939",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d675dfc781f046b2b7ffc",
          "648d6760b9dca56c5709c7cc",
          "648d676410333373dd3091b0",
          "648d6768572f57255c1e0b84",
          "648d676b55d10d0c937d4a06",
          "648d676eb9dca56c5709c7db",
          "648d6771dde1371a1260828e",
          "648d67734026da2ebf70341a",
          "648d6775b9dca56c5709c7e7",
          "648d6778076e7b04c7255e1a",
          "648d677a572f57255c1e0b99",
          "648d677cbe79e84b156046e3",
          "648d677e32e9446194677841",
          "648d6780076e7b04c7255e26",
          "648d678255d10d0c937d4a1a",
          "648d67847252be142b21200f",
          "648d67857252be142b212012",
          "648d6787dde1371a126082a9",
          "648d678932e944619467784e",
          "648d678b55d10d0c937d4a2b",
          "648d678d55d10d0c937d4a2f",
          "648d678ffbedc16ac42c0429",
          "648d6791be79e84b15604704",
          "648d6793fbedc16ac42c042e",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:58:12+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 24,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 7,
      mfr_serial_num: {
        raw: "5ZT2ZKEC9PG404184",
      },
      _meta: {
        id: "5026789939",
        engine: "rvads",
        score: 100.83321,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789942",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 14999,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192139-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022requestAPrice\u0022:\u0022N\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-handshake-o\u0022}",
      },
      ad_id: {
        raw: 5026789942,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026789942",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d675f7252be142b211fde",
          "648d676210333373dd3091ae",
          "648d6766076e7b04c7255e07",
          "648d676a572f57255c1e0b86",
          "648d676d572f57255c1e0b88",
          "648d67704026da2ebf703416",
          "648d677210333373dd3091c2",
          "648d6775dde1371a12608292",
          "648d67777252be142b211ffb",
          "648d6779b9dca56c5709c7ed",
          "648d677b572f57255c1e0b9c",
          "648d677dbe79e84b156046e6",
          "648d677f32e9446194677843",
          "648d6781076e7b04c7255e29",
          "648d6783b9dca56c5709c7fb",
          "648d6785b9dca56c5709c7fe",
          "648d678632e944619467784b",
          "648d6788076e7b04c7255e35",
          "648d678a0f6512194d3d0551",
          "648d678d2891715e35146108",
          "648d679034926b7ad07ab2fc",
          "648d67935510771bc019879b",
          "648d6795fbedc16ac42c0432",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:58:13+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 23,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 8,
      mfr_serial_num: {
        raw: "5ZT2ZKEC2PG404186",
      },
      _meta: {
        id: "5026789942",
        engine: "rvads",
        score: 100.83321,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789937",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 17999,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192134-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002212599\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022}",
      },
      ad_id: {
        raw: 5026789937,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026789937",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d675f4026da2ebf703405",
          "648d6762076e7b04c7255e03",
          "648d6766dde1371a1260827f",
          "648d676a7252be142b211fe8",
          "648d676d7252be142b211fed",
          "648d6770b9dca56c5709c7de",
          "648d6772076e7b04c7255e12",
          "648d6774572f57255c1e0b90",
          "648d67774026da2ebf703420",
          "648d6779be79e84b156046de",
          "648d677b7252be142b212001",
          "648d677d076e7b04c7255e22",
          "648d677f55d10d0c937d4a17",
          "648d6781dde1371a126082a0",
          "648d6783be79e84b156046ef",
          "648d6784be79e84b156046f2",
          "648d678655d10d0c937d4a23",
          "648d6788dde1371a126082ac",
          "648d678a7252be142b21201a",
          "648d678c0f6512194d3d0556",
          "648d678f0f6512194d3d055b",
          "648d67917252be142b212023",
          "648d67937252be142b212028",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:58:11+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 23,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 9,
      mfr_serial_num: {
        raw: "5ZT2ZKEC3PG404181",
      },
      _meta: {
        id: "5026789937",
        engine: "rvads",
        score: 100.83321,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5027138990",
      },
      category_name: {
        raw: ["Fifth Wheel"],
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 65995,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248181\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-vengeance-rogue-sut-357sut-2234925-26\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002246197\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022}",
      },
      ad_id: {
        raw: 5027138990,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-Vengeance+Rogue+SUT+357SUT-5027138990",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "64ae8f1d6a1ed0320b6a9580",
          "64ae8f2be0655868e00f44ef",
          "64ae8f36df825a04572a9579",
          "64ae8fb929132b2a4b07d1ba",
          "64ae8fc109829b4acb546e81",
          "64ae8fc96a1ed0320b6a959c",
          "64ae8fd316187b741112b666",
          "64ae8fe116187b741112b66f",
          "64ae8fed72a8eb506a118c5d",
          "64ae8ff95f2b9276cb1ffa52",
          "64ae90050148664b2f407515",
          "64ae9011d2d1036e733fd0b6",
          "64ae901cfc025d209b696b3e",
          "64ae902859638013d754d1dd",
          "64ae90330449b3759f6d8e9f",
          "64ae903d59638013d754d1ea",
          "64ae90586e09e144f1488598",
          "64ae9065d2f0ff37052e0790",
          "64ae907650c08425e14171b9",
          "64ae908650c08425e14171c1",
          "64ae909ab4265312b90efd75",
          "64ae90ade6c6260302159bd3",
          "64ae90c00c08b7329b42ead7",
          "64ae9126cf3dbe059564a4b8",
          "64ae91365656f33e8d38242e",
          "64ae9146cf3dbe059564a4c7",
          "64ae91555656f33e8d382440",
          "64ae9164f7b7e20f38146504",
          "64ae9172f7b7e20f3814650e",
          "64ae918128346b0b15646b3f",
          "64ae91914bd9f72f5f0034f9",
          "64ae91a12bd1425f33100869",
          "64ae91ed7dc78c563e6be2bb",
          "64ae91fc8dc8d2568b418a86",
          "64ae920a7dc78c563e6be2d1",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Vengeance Rogue SUT 357SUT"],
      },
      model_facet: {
        raw: ["VENGEANCE ROGUE SUT|764991625"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-07-12T11:44:10+00:00",
      },
      create_date_formatted: {
        raw: "Jul 12 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["357SUT"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV Vengeance Rogue SUT 357SUT, \u003Cp\u003EForest River Vengeance Rogue SUT toy hauler 327SUT highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EDouble Slides\u003C/li\u003E",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Vengeance Rogue SUT 357SUT, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Vengeance Rogue SUT toy hauler 327SUT highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Double Slides\u0026lt;\u0026#x2F;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 35,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 10,
      mfr_serial_num: {
        raw: "5NHFVGM20RC005062",
      },
      _meta: {
        id: "5027138990",
        engine: "rvads",
        score: 97.91034,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5029195949",
      },
      category_name: {
        raw: ["Travel Trailer"],
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 36999,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248182\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-ozark-2800thk-2314059-28\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002225899\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022SOOOO MUCH TRAILER FOR SUCH A LITTLE PRICE\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5029195949,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-Ozark+2800THK-5029195949",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "654a0823142e69457e2115b6",
          "654a082bf7da262c18003ffc",
          "654a082d798f346b8d46e0b1",
          "654a082fda010d382815443f",
          "654a0830ea54ae00f924622e",
          "654a0831f7da262c18003fff",
          "654a0832da010d3828154441",
          "654a0834241c762225568500",
          "654a0834798f346b8d46e0b6",
          "654a0835bafb075adf733cb8",
          "654a0836241c762225568504",
          "654a0837ea54ae00f9246235",
          "654a0837798f346b8d46e0bb",
          "654a08385fbeae5f8c6c35fd",
          "654a0839c89c5d75bb0d8b3e",
          "654a083ac89c5d75bb0d8b41",
          "654a083a241c76222556850a",
          "654a083b0c2887663d77bec1",
          "654a08415fbeae5f8c6c3601",
          "654a08420c2887663d77bec4",
          "654a08430c2887663d77bec6",
          "654a0844f7da262c18004009",
          "654a0845ea54ae00f924623f",
          "654a08460c2887663d77bec9",
          "654a0847567b571d644f9b35",
          "654a0848c89c5d75bb0d8b48",
          "654a0849e6b25771cd3bf554",
          "654a084ae6b25771cd3bf556",
          "654a084b567b571d644f9b38",
          "654a08515295ea77286d60be",
          "654a08510c2887663d77bece",
          "654a08574dbc8c38681014f7",
          "654a08580c2887663d77bed2",
          "654a0859da010d3828154454",
          "654a0859c89c5d75bb0d8b51",
          "654a085a174b2140c9446ca0",
          "654a085b174b2140c9446ca2",
          "654a085ce6a2373fac466a1b",
          "654a085d0c2887663d77bed7",
          "654a085dbafb075adf733cd1",
          "654a085ea8d0372a6026c493",
          "654a085fe6a2373fac466a1f",
          "654a0867d417d72080431361",
          "654a086fbafb075adf733cda",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 2800THK"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-11-07T09:50:39+00:00",
      },
      create_date_formatted: {
        raw: "Nov 7 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["2800THK"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV Ozark 2800THK, \u003Cp\u003EForest River Ozark\u00a0toy hauler 2800THKX highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EHigh Capacity Axles\u003C/li\u003E \u003Cli\u003EDual Flip-Out",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 2800THK, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark\u00a0toy hauler 2800THKX highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;High Capacity Axles\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Dual Flip-Out",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 44,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 11,
      mfr_serial_num: {
        raw: "5ZT2ZKTB6RG404205",
      },
      _meta: {
        id: "5029195949",
        engine: "rvads",
        score: 96.1788,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5029826339",
      },
      category_name: {
        raw: ["Travel Trailer"],
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 25999,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248182\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-ozark-1900thk-2273857-28\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002219599\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022ADDICTED TO FUN\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5029826339,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-Ozark+1900THK-5029826339",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "6575e1721ce46c657a4cebbc",
          "6575e173603ee2543932c7ed",
          "659e507f81dfc54f036d0df6",
          "659e508034302339be0b1e5a",
          "659e50812c7f45295d55038c",
          "659e50825cb6f2080f79c7e8",
          "659e5083f3023d41dc36b8d0",
          "659e5084f3023d41dc36b8d4",
          "659e5086c8371267430f99f3",
          "659e5088be7219051933818c",
          "659e508965373c686727e53e",
          "659e508a7da158201046b348",
          "659e508c5a651d092417442a",
          "659e508da3574605215e6180",
          "659e508e9812307a855247d6",
          "659e508f745c0c1ba7347b2d",
          "659e509061f6e50a6e65d2dc",
          "659e5091821f335694780090",
          "659e50927b074014ae6170fd",
          "659e5093832326220570275e",
          "659e5094c6ff090dd549f841",
          "659e50967e3ea137d243d4c9",
          "659e50976f07b858915bb04f",
          "659e5098a81f187d770b4f1d",
          "659e509a55546e163b49f70e",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1900THK"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-12-10T16:04:08+00:00",
      },
      create_date_formatted: {
        raw: "Dec 10 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1900THK"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV Ozark 1900THK, \u003Cp\u003EForest River Ozark toy hauler 1900THK highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003E10\u0027 5\u0022 Garage Area\u003C/li\u003E \u003Cli\u003EExterior Shower\u003C/li\u003E",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1900THK, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark toy hauler 1900THK highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;10\u0026#x27; 5\u0026quot; Garage Area\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Exterior Shower\u0026lt;\u0026#x2F;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 25,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 12,
      mfr_serial_num: {
        raw: "5ZT2ZKHB4RG404602",
      },
      _meta: {
        id: "5029826339",
        engine: "rvads",
        score: 96.1788,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5029826340",
      },
      category_name: {
        raw: ["Travel Trailer"],
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 29995,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248182\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-ozark-1900thk-2273858-28\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002220997\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022I HEARD THIS OZARK LOVES THE OZARKS\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5029826340,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-Ozark+1900THK-5029826340",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: ["6575e1725ba0ca70d02314b8", "6575e173a30e6e09a4510268"],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1900THK"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-12-10T16:04:08+00:00",
      },
      create_date_formatted: {
        raw: "Dec 10 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1900THK"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV Ozark 1900THK, \u003Cp\u003EForest River Ozark toy hauler 1900THK highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003E10\u0027 5\u0022 Garage Area\u003C/li\u003E \u003Cli\u003EExterior Shower\u003C/li\u003E",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1900THK, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark toy hauler 1900THK highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;10\u0026#x27; 5\u0026quot; Garage Area\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Exterior Shower\u0026lt;\u0026#x2F;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 2,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 13,
      mfr_serial_num: {
        raw: "5ZT2ZKHB6RG404598",
      },
      _meta: {
        id: "5029826340",
        engine: "rvads",
        score: 96.1788,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5028707387",
      },
      category_name: {
        raw: ["Fifth Wheel"],
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 64995,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248181\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-vengeance-rogue-sut-357sut-2288921-26\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002245497\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022}",
      },
      ad_id: {
        raw: 5028707387,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-Vengeance+Rogue+SUT+357SUT-5028707387",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "652f7da183d44469797f1d99",
          "652f7da94fe76776800f66b5",
          "652f7db183d44469797f1d9e",
          "652f7dbd83d44469797f1da1",
          "652f7dc5df2d451c0c56abb9",
          "652f7dcd00be790cb80bbb97",
          "652f7dd4c0c5216634422c6d",
          "652f7ddc93b9674eb01f9e8a",
          "652f7de383d44469797f1dac",
          "652f7deb9867b4488510bbdd",
          "652f7df38776051d5b68952b",
          "652f7e0ab026a567a5673edf",
          "652f7e117087e260e5158f7c",
          "652f7e18b026a567a5673ee5",
          "652f7e27945fd93aea1427e0",
          "652f7e3388f67622362a6192",
          "652f7e3aeb043e2c8d624de1",
          "652f7e4044e0687d530eb1e9",
          "652f7e477e0df52d714abcd2",
          "652f7e4c1be98074053394e4",
          "652f7e534949775a2f25549c",
          "652f7e594949775a2f2554a0",
          "652f7e5f7e0df52d714abcdb",
          "652f7e664dd35032cb3752c1",
          "652f7e775b5d96704314b274",
          "652f7e7d6fd7e15130090625",
          "652f7e826fd7e15130090628",
          "652f7e88ea3fce3cfd6b85d7",
          "652f7e8e6fe5e126464f8247",
          "652f7e94ea3fce3cfd6b85de",
          "652f7e999c8ae96c87380616",
          "652f7e9ff73f3b20c540ef6d",
          "652f7ea4f0e7fa41e62cd540",
          "652f7ea9f0e7fa41e62cd542",
          "652f7eadf3787405ea1239ef",
          "652f7eb2f0e7fa41e62cd549",
          "652f7eb7f0e7fa41e62cd54b",
          "652f7ebc70806153f147d78b",
          "652f7ec09c8ae96c87380623",
          "652f7ec42e72fb79be186874",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Vengeance Rogue SUT 357SUT"],
      },
      model_facet: {
        raw: ["VENGEANCE ROGUE SUT|764991625"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-10-18T06:44:20+00:00",
      },
      create_date_formatted: {
        raw: "Oct 18 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["357SUT"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV Vengeance Rogue SUT 357SUT, \u003Cp\u003EForest River Vengeance Rogue SUT toy hauler 357SUT highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EDouble Slides\u003C/li\u003E",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Vengeance Rogue SUT 357SUT, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Vengeance Rogue SUT toy hauler 357SUT highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Double Slides\u0026lt;\u0026#x2F;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 40,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 14,
      mfr_serial_num: {
        raw: "5NHFVGM28RC005133",
      },
      _meta: {
        id: "5028707387",
        engine: "rvads",
        score: 94.52086,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5029100023",
      },
      category_name: {
        raw: ["Fifth Wheel"],
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 64995,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248181\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-vengeance-rogue-sut-357sut-2288924-26\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002245497\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022SUCH A BARGIN FOR BRAND SPANKING NEW\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5029100023,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-Vengeance+Rogue+SUT+357SUT-5029100023",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "653e177395bc1b3e1625a144",
          "653e17767839910b574b363d",
          "653e17781ae23644256ad66a",
          "653e177bfb73084c2b775d62",
          "653e1782cf5f6763d870f338",
          "653e178895bc1b3e1625a156",
          "653e178e122a1e225c76bf9b",
          "653e179439c0652b423e9dda",
          "653e179a1ae23644256ad689",
          "653e17a246b3803e2e385826",
          "653e17a84aa3a35a9226adf1",
          "653e17ae1d35c5014a72109b",
          "653e17b446b3803e2e385837",
          "653e17baa2ab43639516258a",
          "653e17bf1e8a7314e4510a99",
          "653e17c510874b28f1292f5d",
          "653e17cab7054e274731afb3",
          "653e17ce4aa3a35a9226ae0d",
          "653e17d2e711b208a80e2bc4",
          "653e17d4e711b208a80e2bc9",
          "653e17d60309534ea6702c08",
          "653e17d9e711b208a80e2bcf",
          "653e17dbbbb4980c8c622a80",
          "653e17dd9b3e6152a338faa1",
          "653e17dfd062ac695479bc02",
          "653e17e610874b28f1292f76",
          "653e17ed10874b28f1292f7e",
          "653e17f494aedf009b04df0c",
          "653e17f91774753bdf1c27e6",
          "653e17ff5f5a0069a25d9aa1",
          "653e1805bbb4980c8c622aa5",
          "653e180c8c6a080e1118bb29",
          "653e181105240238a0451098",
          "653e181705240238a045109b",
          "653e181dc399e727471a5b58",
          "653e1823fd40095e0d033263",
          "653e1829d7f645386854e50b",
          "653e1830c03ce2400f77352f",
          "653e183fd7f645386854e51d",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Vengeance Rogue SUT 357SUT"],
      },
      model_facet: {
        raw: ["VENGEANCE ROGUE SUT|764991625"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-10-29T08:30:55+00:00",
      },
      create_date_formatted: {
        raw: "Oct 29 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["357SUT"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV Vengeance Rogue SUT 357SUT, \u003Cp\u003EForest River Vengeance Rogue SUT toy hauler 357SUT highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EDouble Slides\u003C/li\u003E",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Vengeance Rogue SUT 357SUT, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Vengeance Rogue SUT toy hauler 357SUT highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Double Slides\u0026lt;\u0026#x2F;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 39,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 15,
      mfr_serial_num: {
        raw: "5NHFVGM2XRC005134",
      },
      _meta: {
        id: "5029100023",
        engine: "rvads",
        score: 94.52086,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789930",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 64999,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-cardinal-312rlle-2219960-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002245499\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022RETIREMENT ANYONE? THIS WOULD BE SUPER FUN\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5026789930,
      },
      is_premium: {
        raw: "1",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Cardinal+312RLLE-5026789930",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d675d55d10d0c937d49fb",
          "648d675ffc781f046b2b7fff",
          "648d67637252be142b211fe1",
          "648d6767b9dca56c5709c7d4",
          "648d676a10333373dd3091ba",
          "648d676d076e7b04c7255e0c",
          "6492e4e949b4975ba92a5a1b",
          "6492e4f525f71f58e0731ec5",
          "6492e50065042b457f71d216",
          "6492e54a7bb52b63c5479996",
          "6492e55c7e8dc879aa3fe5d0",
          "6492e56edd385d66577633b1",
          "6492e580dd385d66577633bb",
          "6492e590b1c4c2354b1d28ec",
          "6492e5a024b5121d3c681e78",
          "6492e5b16d18c173d235d52a",
          "6492e5fdb87c2c6bac650ded",
          "6492e60d435ae2710c4eb82b",
          "6492e657e5b9192edd392da4",
          "6492e6a265b1ad58281e25db",
          "6492e6af602e6877d43ac3c2",
          "6492e6bb934c9a29527384c5",
          "6492e6c7f0f1120fa96ad9d8",
          "6492e6d2461dba50b5000266",
          "649403d28bd3a816d06daad3",
          "6492e744e1e9687373764b6e",
          "6492e749a678397835050eb2",
          "6492e74fd6cc5c482744b1b8",
          "6492e75473e5c2238d4109dd",
          "6492e75ae8c5652109186bf2",
          "6492e75f5452ca5992566cae",
          "6492e764e8c5652109186bf7",
          "6492e769cf6402288d348cdf",
          "6492e76e5452ca5992566cbd",
          "6492e7749c80122c6f5b1ea8",
          "6492e7b2bcd39f45a011fb37",
          "6492e7b4bcd39f45a011fb3b",
          "6492e7b6891f2269e83bc31f",
          "6492e7b8bcd39f45a011fb41",
          "6492e7ba027f33569c0c01d5",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Cardinal 312RLLE"],
      },
      model_facet: {
        raw: ["CARDINAL|764836170"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T07:57:34+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["312RLLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:true,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Cardinal 312RLLE, \u003Cp\u003EForest River Cardinal fifth wheel 312RLLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EFront Private Bedroom\u003C/li\u003E \u003Cli\u003EKitchen",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Cardinal 312RLLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Cardinal fifth wheel 312RLLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Front Private Bedroom\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Kitchen",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 40,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 16,
      mfr_serial_num: {
        raw: null,
      },
      _meta: {
        id: "5026789930",
        engine: "rvads",
        score: 91.73485,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5027023841",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 129995,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-riverstone-39rkfb-2234922-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002297997\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022}",
      },
      ad_id: {
        raw: 5027023841,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-RiverStone+39RKFB-5027023841",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "64a023e8c5ea4643826d0fb4",
          "64a023fc6a47405bf811249f",
          "64a0240e6866563be1626bf8",
          "64a0245c98685974453348ce",
          "64a0246eb6007e6bd470f075",
          "64a0247faf4d0175f656904f",
          "64a0248f4192270bdb4c0bdb",
          "64a0249df3c4661f49546cba",
          "64a6c24ac240bf0105426868",
          "64a6c257eb3b8f11351db92e",
          "64a6c29e83388d4808460887",
          "64a6c2abeb3d5423a506f1d8",
          "64a6c2b99725cf70932de695",
          "64a6c2c87ac0a86fef056061",
          "64a6c2d49725cf70932de6a2",
          "64a6c2e1dd736b231573f90e",
          "64a6c2f1c267fe776a107fa1",
          "64a6c2fd1543b870ef6e1068",
          "64a6c3070c916460926e2094",
          "64a6c3120e11956b764674c0",
          "64a6c357d4bfc75d8147f428",
          "64a6c3610d0ac75cb25dcc61",
          "64a6c372a0e1f7564a4943ab",
          "64a6c382820e0b6ada64d479",
          "64a6c3927d425356a5607451",
          "64a6c3a29725cf70932de6bd",
          "64a6c3b188956d7d3401f875",
          "64a6c3fe682c3b6adc7e09fb",
          "64a6c40db7eb6e7522679bec",
          "64a6c455442661423d0d64d5",
          "64a6c465b5aebc221a7bf527",
          "64a6c472926488555637dd23",
          "64a6c47e5af13322177c945c",
          "64a6c48a368d4a654d70ce49",
          "64a6c4951a9f9a610b604b1b",
          "64a6c49f73a97235a750f322",
          "64a6c4adac718f5ae352e88f",
          "64a6c4b8db25ee5dd50515bb",
          "64a6c4c4bc90752f4c002eda",
          "64a6c4d0a9601e562d3fbf1c",
          "64a6c4db495a7668cb3984bd",
          "64a6c4e3a9601e562d3fbf28",
          "64a6c4ec90625d0465029fe9",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["RiverStone 39RKFB"],
      },
      model_facet: {
        raw: ["RIVERSTONE|764968309"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-07-01T13:05:34+00:00",
      },
      create_date_formatted: {
        raw: "Jul 1 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["39RKFB"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV RiverStone 39RKFB, \u003Cp\u003EForest River RiverStone fifth wheel 39RKFB highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EDesk\u003C/li\u003E \u003Cli\u003ERear Kitchen\u003C/li\u003E",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E 39RKFB, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E fifth wheel 39RKFB highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Desk\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Rear Kitchen\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 43,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 17,
      mfr_serial_num: {
        raw: null,
      },
      _meta: {
        id: "5027023841",
        engine: "rvads",
        score: 202.4051,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5025849261",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 119894,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-riverstone-39rbfl-2156206-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u0022115000\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022HELLO I WILL MAKE YOU THE HAPPIEST RIVERSTONE OWNERS EVER!\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5025849261,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-RiverStone+39RBFL-5025849261",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "643e806b479530504d2a5f0f",
          "643e8078cb062e6e42139d3c",
          "643e8083cb062e6e42139d41",
          "643e80901cad5844eb042556",
          "643e809c2b7f4876e27dee34",
          "643e80a99b83db47c27f3252",
          "643e80b4aee87849c56b9e02",
          "643e80c1e5955006fc7a02be",
          "643e80cd8f023221f825ce60",
          "643e80daac899627f441bb53",
          "643e80e9874ff85f090fe321",
          "643e80f56d69b875e2382a68",
          "643e8100609a0641e1794a60",
          "643e810b8b1d5720294b65f9",
          "643e81174891bd3084165984",
          "643e815fd090d454935c253e",
          "643e816b98d64c3b0671c6ab",
          "643e81764891bd30841659a9",
          "643e81801975f979fc2d6035",
          "643e818b7c516d307f73f5b9",
          "643e8196916749388c4c2085",
          "643e81a00c941c69981aacbd",
          "643e81aa1cad5844eb04257e",
          "643e81b41184721a63657e7f",
          "643e81f9211e6c5cda018de4",
          "643e8202d00b543c5e355957",
          "643e820d8bee846a8301457d",
          "643e82530c711513461a9ce3",
          "643e825e0c711513461a9ce7",
          "643e8267b47229608723f74e",
          "643e826f48ace8608122d3df",
          "643e8277b47229608723f754",
          "643e827fe0bb9f5604189867",
          "643e8286b47229608723f75b",
          "643e828d110d2c699c010e57",
          "643e8295a3e34f7c48536df3",
          "643e829d38b92e404077886d",
          "643e82a5195601670e149a8f",
          "643e82ae38b92e4040778877",
          "643e82b5a8356651ad04edf0",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["RiverStone 39RBFL"],
      },
      model_facet: {
        raw: ["RIVERSTONE|764968309"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-04-18T11:44:54+00:00",
      },
      create_date_formatted: {
        raw: "Apr 18 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["39RBFL"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:true,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV RiverStone 39RBFL, \u003Cp\u003EForest River RiverStone fifth wheel 39RBFL highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003ESeparate Living Room\u003C/li\u003E \u003Cli\u003ETwo",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E 39RBFL, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E fifth wheel 39RBFL highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Separate Living Room\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Two",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 40,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 18,
      mfr_serial_num: {
        raw: null,
      },
      _meta: {
        id: "5025849261",
        engine: "rvads",
        score: 202.4051,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5029146141",
      },
      year: {
        raw: 2022,
      },
      floorplan_mediaid: {
        raw: "6543c57aa95dee6d8942884e",
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 114999,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/used-2022-forest-river-rv-riverstone-391fsk-2347832-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022LETS START LIVING IN STYLE\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5029146141,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2022-Forest+River+Rv-RiverStone+391FSK-5029146141",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "65439f2bf1b5893c2d066afc",
          "65439f3a2c4cf256835eff56",
          "65439f4555bb1730504265f5",
          "65439f4f6296620c526f927f",
          "65439f5dd279da1ff40685ad",
          "65439f6a9c71f974d6416b8c",
          "65439f770d85981d022f54b1",
          "65439f84478baf4b8166c7b5",
          "65439f8c5579ed57442bbadc",
          "65439f995579ed57442bbae1",
          "65439fa3fcfef1760149b3f1",
          "65439faffcfef1760149b3f5",
          "65439fbe559b33073a5a0194",
          "65439fce638bc81d5b518380",
          "65439fdd3ef987693819cc96",
          "65439febbd51ef507b38a4c0",
          "65439ff93ef987693819cc9f",
          "6543a0073ef987693819cca5",
          "6543a0155ce8314a2a6231f5",
          "6543a023bd51ef507b38a4d5",
          "6543a031e608246f21469faf",
          "6543a03e4de53815505f6c0a",
          "6543a04cd4472b12b30c1eaa",
          "6543a05b5ce8314a2a62320d",
          "6543a06cbccd0d217715f566",
          "6543a07ea13f135b813a2d98",
          "6543a0902376981d7a09f931",
          "6543a0a0f3fbab22f56af961",
          "6543a0af262f1f78a173f61e",
          "6543a0be50dfc50f656ccdf4",
          "6543a0cd7fc6af05f906c0b2",
          "6543a0dd7fc6af05f906c0b8",
          "6543a0ebecd1fb58cd1829e6",
          "6543a0f8aea3a310b266d270",
          "6543a105397a5b428c762916",
          "6543a110ddeae4260f1229e3",
          "6543a11c7173b303453e7901",
          "6543a127ddeae4260f1229f5",
          "6543a132670d89079a55ff6e",
          "6543a13dddeae4260f122a04",
          "6543a147397a5b428c762950",
          "6543a152689bb13891155749",
          "6543a15c9fe42534c2770d24",
          "6543a165689bb1389115575d",
          "6543a16ff4088378e307a45f",
          "6543a178387720480548e70b",
          "6543a180072a0c41cf4b613e",
          "65be207eaef00931d05c6f45",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["RiverStone 391FSK"],
      },
      model_facet: {
        raw: ["RIVERSTONE|764968309"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-11-02T13:17:52+00:00",
      },
      create_date_formatted: {
        raw: "Nov 2 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["391FSK"],
      },
      condition: {
        raw: "Used",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2022 Forest River RV RiverStone 391FSK, \u003Cp\u003EForest River RiverStone fifth wheel 391FSK highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EFive Slides\u003C/li\u003E \u003Cli\u003E65\u0022 LED Smart",
        snippet:
          "2022 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E 391FSK, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E fifth wheel 391FSK highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Five Slides\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;65\u0026quot; LED Smart TV",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 48,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 19,
      mfr_serial_num: {
        raw: "4X4FRSR28N0003035",
      },
      _meta: {
        id: "5029146141",
        engine: "rvads",
        score: 199.39157,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5029705248",
      },
      category_name: {
        raw: ["Fifth Wheel"],
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 149995,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248181\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-riverstone-42fskg-2336411-26\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u0022104997\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022}",
      },
      ad_id: {
        raw: 5029705248,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-RiverStone+42FSKG-5029705248",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "65688c9bc4897006630d419d",
          "65688cb54e25da4e270c0eb8",
          "65688cd5e70ad3717257e969",
          "65688cf19b5ebe6fd970873c",
          "65688d1152ebb6357b680c2a",
          "65688d2ad479ff30c24642d4",
          "65688d3da709122ff34bbe3b",
          "65688d5f6f3c372a6e209a6c",
          "65688d8368e7063fc93c7718",
          "65688d97d9239932e44cb828",
          "65688db982872b4fe8054635",
          "65688ddb4131f93c29732f33",
          "65688df66cece92d5d4c52c5",
          "65688e1202632927693636c8",
          "65688e2b863ebf5ade36fdbb",
          "65688e5d3133047b061a0676",
          "65688e84dfef79567864c655",
          "65688eb168e7063fc93c774c",
          "65688eda0b581649b167bfe2",
          "65688ef56f3c372a6e209a99",
          "65688f071cc388380415524c",
          "65688f1f5987c639e974c811",
          "65688f38a04d5b2c2d1a6702",
          "65688f42110a530bcf5ed408",
          "65688f4b623a3e064f1a2f52",
          "65688f632f3c7c2e3d035db7",
          "65688f6c2c908257614deb78",
          "65688f80da7e5c07450eed50",
          "65688f8ebf0329004a54d7b6",
          "65688f97f48fed27212a2e05",
          "65688fa6a4de9c373e210874",
          "65688fae6c7ddf3f0a708aa3",
          "65688fb55479f163de7b7906",
          "65688fbd1506ce69e23af4f2",
          "65688fc596a5e8375832c338",
          "65688fd0f48fed27212a2e15",
          "65688fe0750d6a40e43f841d",
          "65688feb1a127840b40bb693",
          "65688ff5d1778115455e7de4",
          "65689009f1608e3286009927",
          "65689012711d673cb0433b9a",
          "656890253b0ab72278521846",
          "6568903d3b0ab7227852184a",
          "6568904459ec78418e1bf129",
          "6568904bfff3fd668e325910",
          "6568906223ac633cae0636f9",
          "65689070f3f96a660000d7d1",
          "65689086b0be1d21f17d8236",
          "656890b013f4bb6869536e3b",
          "656890cd9555731eb30f71b3",
          "656890e49767c3468643712e",
          "6568910370c42a3ff90195c9",
          "6568911f2f97a716ab4ccfac",
          "6568912f8ec8cb774e1fbf78",
          "656891bccbfbb8168c259b25",
          "656892bc9e3c8028fd3410d3",
          "656893b604824f406f0eea36",
          "6568947404858772297f04ff",
          "6568953166b87b68a61b5b79",
          "656895f5a18d1f54c161915e",
          "6568982ca3dfa677a52e8a61",
          "6568992e889b49263b25c2e8",
          "65689a773922c64b630b6304",
          "65689b3aa52c1646da1a70ed",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["RiverStone 42FSKG"],
      },
      model_facet: {
        raw: ["RIVERSTONE|764968309"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-11-30T14:24:59+00:00",
      },
      create_date_formatted: {
        raw: "Nov 30 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["42FSKG"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV RiverStone 42FSKG, \u003Cp\u003EForest River RiverStone toy hauler 42FSKG highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBelow-Floor Garage\u003C/li\u003E \u003Cli\u003EOutside",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E 42FSKG, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E toy hauler 42FSKG highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Below-Floor Garage\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Outside TV",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 64,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 20,
      mfr_serial_num: {
        raw: "4X4FRS838R0004265",
      },
      _meta: {
        id: "5029705248",
        engine: "rvads",
        score: 196.8071,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026406455",
      },
      category_name: {
        raw: ["Fifth Wheel"],
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 144894,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248181\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-riverstone-45bath-2156207-26\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u0022130497\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022videoBorchueNarationStyle\u0022:\u00221\u0022,\u0022tagLineValue\u0022:\u0022ROLLS ROYCE OF TOYHAULERS\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5026406455,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River-RiverStone+45BATH-5026406455",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "64672ac9226e8c34a5076b68",
          "64672acb4bcb4a356e070075",
          "64672ace4afea248d3492b7b",
          "64672ad0e2ebd400d6032799",
          "64672ad24bcb4a356e07007c",
          "64672ad6e2ebd400d603279f",
          "64672ad772829033676344a6",
          "64672ad99c774a291e2f3f45",
          "64672adbe2ebd400d60327a7",
          "64672adc72829033676344ab",
          "64672adefe906e5d58179e52",
          "64672adfc96e0b3ffc0cf1d4",
          "64672ae0cbe77126741fd67d",
          "64672ae235b4026d106e4804",
          "64672ae314e76c1d710e7a56",
          "64672ae467e03e338f6d3715",
          "64672ae56b02574de930c63f",
          "64672ae6e0798161ae2b58ff",
          "64672ae735b4026d106e480a",
          "64672ae86b02574de930c643",
          "64672ae967e03e338f6d3717",
          "64672aea636251382c2a3cb9",
          "64672aeb1392ce72f71ec3cc",
          "64672aecfc28d6342c7897e8",
          "64672aed14e76c1d710e7a60",
          "64672aed984dfb57bb4e2f39",
          "64672aef6b02574de930c64b",
          "64672af114e76c1d710e7a62",
          "64672af26b02574de930c64f",
          "64672af36b02574de930c651",
          "64672af56b02574de930c654",
          "64672af689e398510812bef9",
          "64672af75d9e781215618b56",
          "64672af81392ce72f71ec3da",
          "64672af91392ce72f71ec3dc",
          "64672af95de01720f65aa7e6",
          "64672afa984dfb57bb4e2f42",
          "64672afb984dfb57bb4e2f44",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["RiverStone 45BATH"],
      },
      model_facet: {
        raw: ["RIVERSTONE|764968309"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-05-19T07:53:31+00:00",
      },
      create_date_formatted: {
        raw: "May 19 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["45BATH"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:true,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV RiverStone 45BATH, \u003Cp\u003EForest River RiverStone toy hauler 45BATH highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EKing Bed Slide Out\u003C/li\u003E \u003Cli\u003EHidden",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E 45BATH, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERiverStone\u003C/em\u003E toy hauler 45BATH highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;King Bed Slide Out\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Hidden",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 38,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 21,
      mfr_serial_num: {
        raw: null,
      },
      _meta: {
        id: "5026406455",
        engine: "rvads",
        score: 187.74512,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026789966",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 49999,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-cardinal-red-31rl-2190904-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002237097\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022Financing\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5026789966,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Cardinal+RED+31RL-5026789966",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "648d678961eb72398557a9bf",
          "648d678d2891715e35146106",
          "648d67902891715e3514610b",
          "648d6792c61ae1285a382eb0",
          "648d6795f9f0f60f033e1ffc",
          "648d6797dde1371a126082c6",
          "648d679832e944619467785f",
          "648d679afbedc16ac42c0437",
          "648d679c786fbb26ad299a9d",
          "648d679e786fbb26ad299a9f",
          "648d679fa35f4428287d4618",
          "648d67a1a35f4428287d461b",
          "648d67a3a35f4428287d461f",
          "648d67a4be79e84b15604714",
          "648d67a6be79e84b15604716",
          "648eaa8244fde2787264ca50",
          "648d67e5edc21c1a7d67b643",
          "648d67e720f8f26d335ab4b8",
          "648d67e9ce1c246ea6569076",
          "648d67ec0f84710b0e401c9a",
          "648d67ee77de904560678b27",
          "648d67f00f84710b0e401c9d",
          "648d67f3f88dfb43c8330088",
          "648d67f620f8f26d335ab4c2",
          "648d67f977de904560678b2c",
          "648d67fcce1c246ea6569085",
          "648d67fe77de904560678b30",
          "648d68000f84710b0e401ca6",
          "648d6803a42a237ba7296550",
          "648d6806b5e8624dc47dca1c",
          "648d6808ae84875ab835da26",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Cardinal RED 31RL"],
      },
      model_facet: {
        raw: ["CARDINAL|764836170"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-17T08:00:09+00:00",
      },
      create_date_formatted: {
        raw: "Jun 17 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["31RL"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Cardinal RED 31RL, \u003Cp\u003EForest River RV Cardinal RED 31RL highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EKing Bed\u003C/li\u003E \u003Cli\u003EFull Width Wardrobe\u003C/li\u003E",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Cardinal RED 31RL, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Cardinal RED 31RL highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;King Bed\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Full Width Wardrobe\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 31,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 22,
      mfr_serial_num: {
        raw: null,
      },
      _meta: {
        id: "5026789966",
        engine: "rvads",
        score: 111.297516,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5028387082",
      },
      year: {
        raw: 2024,
      },
      class_id: {
        raw: "198070",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 39999,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2024-forest-river-rv-phoenix-235rk-2288918-5\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002227999\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022,\u0022tagLineValue\u0022:\u0022SUPER LIGHT EASY TO TOW\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5028387082,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2024-Forest+River+Rv-Phoenix+235RK-5028387082",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "6527d3c3d283253d75753624",
          "6527d3c5c9d4cc7b01244a28",
          "6527d3c7eef3fc4dc76bbc24",
          "6527d3c9d283253d75753629",
          "6527d3cbeef3fc4dc76bbc27",
          "6527d3cdd283253d7575362c",
          "6527d3d04c8c36559f47dbff",
          "6527d3d24c8c36559f47dc04",
          "6527d3d4c6bec853d36c9697",
          "6527d3d5adfd6254531b6834",
          "6527d3d7b394b9606130c5a0",
          "6527d3daadfd6254531b683a",
          "6527d3db7fe6240915092d2a",
          "6527d3dc4c8c36559f47dc0d",
          "6527d3deb33e233bde1b278e",
          "6527d3e06d0ae870f54a5e26",
          "6527d3e2bb1fb66c9f14c519",
          "6527d3e34a2162163e5838fd",
          "6527d3e51231b107cc36e4a1",
          "6527d3e61231b107cc36e4a4",
          "6527d3e896bd4e20446226bd",
          "6527d3e9b33e233bde1b2792",
          "6527d3ebfa80374ad4794bf9",
          "6527d3ecfa80374ad4794bfb",
          "6527d3ee73dd663a286afcdb",
          "6527d3effa80374ad4794bfe",
          "6527d3f14a2162163e583905",
          "6527d3f273dd663a286afce1",
          "6527d3f4023eb93dbc060eb6",
          "6527d3f58f65d648fd51fed2",
          "6527d3f784ec8341a661a673",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Fifth Wheel",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Phoenix 235RK"],
      },
      model_facet: {
        raw: ["PHOENIX|764997036"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-10-12T11:09:46+00:00",
      },
      create_date_formatted: {
        raw: "Oct 12 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["235RK"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2024 Forest River RV Phoenix 235RK, \u003Cp\u003ECall for details.\u003C/p\u003E",
        snippet:
          "2024 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Phoenix 235RK, \u0026lt;p\u0026gt;Call for details.\u0026lt;\u0026#x2F;p\u0026gt;",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 31,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 23,
      mfr_serial_num: {
        raw: "5ZT3SPNB4RA002057",
      },
      _meta: {
        id: "5028387082",
        engine: "rvads",
        score: 109.28868,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5030165150",
      },
      category_name: {
        raw: ["Fifth Wheel"],
      },
      year: {
        raw: 2022,
      },
      floorplan_mediaid: {
        raw: "659d301a0603c31cd21cee49",
      },
      class_id: {
        raw: "139350904",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 69999,
      },
      ad_attribs: {
        raw: "{\u00225000000011\u0022:\u0022644248181\u0022,\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/used-2022-forest-river-rv-vengeance-rogue-armored-vgf351g2-2388468-26\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022requestAPrice\u0022:\u0022N\u0022,\u0022tagLineValue\u0022:\u0022LETS BEGIN TO LIVE\u0022,\u0022tagLineIcon\u0022:\u0022fa fa-bookmark\u0022}",
      },
      ad_id: {
        raw: 5030165150,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2022-Forest+River+Rv-Vengeance+Rogue+Armored+VGF351G2-5030165150",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "659cff3fa2840f03115f5704",
          "659cff3f9ab3bb023207984b",
          "659cff40fb9d4e289a6f6445",
          "659cff41cf30d0393d24f067",
          "659cff4124c0a176116889b9",
          "659cff424f91ad27d368700d",
          "659cff42fb9d4e289a6f6447",
          "659cff427c0f942d89444a22",
          "659cff427c0f942d89444a24",
          "659cff4331356531c87604c2",
          "659cff433c223f24a3029596",
          "659cff43f11e6f084006f585",
          "659cff434970f62018692676",
          "659cff44f11e6f084006f587",
          "659cff449a1baf5451628d25",
          "659cff4424c0a176116889bc",
          "659cff449a1baf5451628d27",
          "659cff447c0f942d89444a26",
          "659cff450b27f6206e3ebd5c",
          "659cff45819c1b051f5dbe69",
          "659cff46f11e6f084006f589",
          "659cff466447b9125138d025",
          "659cff4772527e484b765be6",
          "659cff48d344581a2c2dfd59",
          "659cff485350016a180d06cb",
          "659cff497c0f942d89444a28",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Toy Hauler",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Vengeance Rogue Armored VGF351G2"],
      },
      model_facet: {
        raw: ["VENGEANCE ROGUE ARMORED|764981930"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2024-01-09T08:09:51+00:00",
      },
      create_date_formatted: {
        raw: "Jan 9 2024",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["351"],
      },
      condition: {
        raw: "Used",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:false,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2022 Forest River RV Vengeance Rogue Armored VGF351G2, \u003Cp\u003EForest River Vengeance Rogue Armored toy hauler VGF351G2 highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EFront",
        snippet:
          "2022 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Vengeance Rogue Armored VGF351G2, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Vengeance Rogue Armored toy hauler VGF351G2 highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Front",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 26,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 24,
      mfr_serial_num: {
        raw: null,
      },
      _meta: {
        id: "5030165150",
        engine: "rvads",
        score: 99.66722,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
    {
      id: {
        raw: "5026652002",
      },
      year: {
        raw: 2023,
      },
      class_id: {
        raw: "198073",
      },
      dealer_group_id: {
        raw: "5000000136",
      },
      price: {
        raw: 17999,
      },
      ad_attribs: {
        raw: "{\u0022itemUrl\u0022:\u0022https:\\/\\/www.legacyrvcenter.com\\/product\\/new-2023-forest-river-rv-ozark-1620bhle-2192146-29\u0022,\u0022msrp\u0022:\u0022N\u0022,\u0022makeAnOffer\u0022:\u0022Y\u0022,\u0022makeAnOfferPrice\u0022:\u002212599\u0022,\u0022requestAPrice\u0022:\u0022Y\u0022}",
      },
      ad_id: {
        raw: 5026652002,
      },
      is_premium: {
        raw: "0",
      },
      is_toppremium: {
        raw: "0",
      },
      phone: {
        raw: "8013962492",
      },
      ad_detail_url: {
        raw: "https://www.rvtrader.com/listing/2023-Forest+River+Rv-Ozark+1620BHLE-5026652002",
      },
      company_name: {
        raw: "Legacy RV - Salt Lake City",
      },
      city: {
        raw: "south salt lake",
      },
      latitude: {
        raw: "40.71420",
      },
      make_name: {
        raw: ["Forest River Rv"],
      },
      make_facet: {
        raw: ["Forest River|440465"],
      },
      photo_ids: {
        raw: [
          "64802f6753d49b423623dae5",
          "64802f6725d193316001665f",
          "648816c2aef8060ba6242057",
          "648816c4fa03c6153041541b",
          "648816c66a56c748b5588517",
          "648816c74d0ed85a47686fde",
          "648816c8fb4161115e169b37",
          "648816cafb4161115e169b3a",
          "648816cb6a56c748b5588520",
          "648816ccfb4161115e169b40",
          "648816cd6a56c748b5588526",
          "648816cf384c4e65833eb346",
          "648816d0384c4e65833eb348",
          "648816d1a0505b7a31718368",
          "648816d26a56c748b558852d",
          "648816d3fb4161115e169b46",
          "648816d56a56c748b558852f",
          "648816d6aef8060ba6242073",
          "648816d77f886165f66b4dea",
          "648816d8fb4161115e169b4b",
          "648816d94b03206d6b0457f3",
          "648816dafb4161115e169b50",
          "648816db4d0ed85a47686ffb",
          "648816dcaef8060ba624207c",
        ],
      },
      msrp: {
        raw: null,
      },
      class_name: {
        raw: "Travel Trailer",
      },
      dealer_features: {
        raw: "{\u0022hasHideTaglines\u0022:false,\u0022hasHideDealerWebsiteLink\u0022:false,\u0022hasRemoveLoanCalcDealerFinancing\u0022:false,\u0022removeRequestPhotoVideo\u0022:false,\u0022hasRemoveVinFromDisplay\u0022:false,\u0022hasRequestQuoteWeBuy\u0022:false,\u0022hasRequestQuotePreorder\u0022:false,\u0022hasDealerCoreLeadManager\u0022:true,\u0022hasCoreLite\u0022:false,\u0022hasTradertraxxCombinedExperience\u0022:true,\u0022hasVideo\u0022:true,\u0022hasVideoChatRequest\u0022:false,\u0022hasMakeAnOffer\u0022:true,\u0022hasRequestBestPrice\u0022:true,\u0022hasRequestPrice\u0022:true,\u0022hasRequestTradeIn\u0022:false,\u0022hasContactAtOnce\u0022:false,\u0022hasContactAtOnceTexting\u0022:false,\u0022hasTalkingBrochure\u0022:true,\u0022hasAdPearance\u0022:true,\u0022hasVr\u0022:true,\u0022hasMapIt\u0022:true,\u0022hasClickToWeb\u0022:true,\u0022hasSuggestedTrucks\u0022:false,\u0022hasDealDesignation\u0022:false,\u0022isHibernate\u0022:false,\u0022hasDigitalRetailingBuyNow\u0022:false,\u0022hasBuyNow700CreditQualify\u0022:false,\u0022hasBuyNow700CreditQuickApp\u0022:false,\u0022hasDigitalRetailingBuyNowDeposit\u0022:false,\u0022hasDigitalRetailingBuyNowFullPayment\u0022:false,\u0022hasDigitalRetailingEnhancedLead\u0022:false,\u0022hasOptOutDealerGroupWebsite\u0022:false,\u0022hasOptOutDealerGroupRollup\u0022:false,\u0022hasOptOutDealerGroupLeaderboard\u0022:false,\u0022hasOptOutDealerGroupSharedLogin\u0022:false,\u0022deactivateContactDealer\u0022:false,\u0022hasAccessIndustryAero\u0022:false,\u0022hasAccessIndustryCycle\u0022:false,\u0022hasAccessIndustryEquipment\u0022:false,\u0022hasAccessIndustryRentalsCycle\u0022:false,\u0022hasAccessIndustryRentalsRv\u0022:false,\u0022hasAccessIndustryRV\u0022:true,\u0022hasAccessIndustryTrailer\u0022:false,\u0022hasAccessIndustryTruck\u0022:false,\u0022hasAccessIndustryBoatline\u0022:false,\u0022hasAccessIndustryNextruck\u0022:false,\u0022hasAccessIndustryRockAndDirt\u0022:false,\u0022hasAccessIndustryTradeAPlane\u0022:false,\u0022hasAccessIndustryTradeEquip\u0022:false,\u0022hasAutoSelectUnusedBundle\u0022:false,\u0022hasHideFinance\u0022:false,\u0022hasHideInspection\u0022:false,\u0022hasHideLoanCalculator\u0022:false,\u0022hasHideShipping\u0022:false,\u0022hasHideFactorySpecs\u0022:false,\u0022hasHideStandardFeatures\u0022:false,\u0022hasInternetAdvertising\u0022:true,\u0022hasRental\u0022:false,\u0022hasShiftDigital\u0022:false,\u0022hasFacebookRetargeting\u0022:false,\u0022hasGreenFlag\u0022:false,\u0022hasClickToCall\u0022:false,\u0022hasShowListingAddress\u0022:false,\u0022hasTradeIn\u0022:false,\u0022hasTradeInFeature\u0022:false,\u0022hasOctaneFinance\u0022:false,\u0022hasTiChatManaged\u0022:false,\u0022hasTiChat\u0022:true,\u0022hasAdLocationLockdown\u0022:false,\u0022hasShutOffAdvertising\u0022:false,\u0022hasMakeAnOfferPrice\u0022:false,\u0022hasTiChatGuestDisabled\u0022:false,\u0022hasShutOffDigitRetailVDP\u0022:false,\u0022hasAbilityToAddNewDRInventory\u0022:false,\u0022hasRunBuggyShipping\u0022:false,\u0022hasBuyNowDisableVendorFees\u0022:false,\u0022hasBuyNowFinioCreditApplication\u0022:false}",
      },
      customer_id: {
        raw: "5001954356",
      },
      dealer_group_name: {
        raw: "Haugen RV Group",
      },
      model_name: {
        raw: ["Ozark 1620BHLE"],
      },
      model_facet: {
        raw: ["OZARK|764978292"],
      },
      seller_type: {
        raw: "Dealer",
      },
      create_date: {
        raw: "2023-06-07T07:19:05+00:00",
      },
      create_date_formatted: {
        raw: "Jun 7 2023",
      },
      longitude: {
        raw: "-111.89140",
      },
      make_id: {
        raw: ["440465"],
      },
      trim_name: {
        raw: ["1620BHLE"],
      },
      condition: {
        raw: "New",
      },
      ad_features: {
        raw: "{\u0022buyNow\u0022:false,\u0022premium\u0022:false,\u0022featuredHomepage\u0022:false,\u0022featuredSearch\u0022:true,\u0022hideFloorPlans\u0022:false,\u0022paaVideo\u0022:false,\u0022oneYearPackage\u0022:false,\u0022topPremium\u0022:false}",
      },
      state_code: {
        raw: "UT",
      },
      description: {
        raw: "2023 Forest River RV Ozark 1620BHLE, \u003Cp\u003EForest River Ozark Limited Edition travel trailer 1620BHLE highlights:\u003C/p\u003E \u003Cul\u003E \u003Cli\u003EBunk Beds\u003C/li\u003E \u003Cli\u003EAmple",
        snippet:
          "2023 \u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E \u003Cem\u003ERV\u003C/em\u003E Ozark 1620BHLE, \u0026lt;p\u0026gt;\u003Cem\u003EForest\u003C/em\u003E \u003Cem\u003ERiver\u003C/em\u003E Ozark Limited Edition travel trailer 1620BHLE highlights:\u0026lt;\u0026#x2F;p\u0026gt; \u0026lt;ul\u0026gt; \u0026lt;li\u0026gt;Bunk Beds\u0026lt;\u0026#x2F;li\u0026gt; \u0026lt;li\u0026gt;Ample",
      },
      scheme_code: {
        raw: "AD",
      },
      dealer_id: {
        raw: "5000007818",
      },
      rebate: {
        raw: null,
      },
      dealer_phone: {
        raw: [
          "8013088677|0||CS",
          "8013962492|0||FD",
          "8013088677|1|OVERRIDE|OV",
        ],
      },
      photo_count: {
        raw: 24,
      },
      dealer_website_url: {
        raw: "https://www.legacyrvcenter.com",
      },
      ad_listing_position: 25,
      mfr_serial_num: {
        raw: "5ZT2ZKECXPG404193",
      },
      _meta: {
        id: "5026652002",
        engine: "rvads",
        score: 99.627785,
      },
      model_group_id: {
        raw: null,
      },
      model_group_name: {
        raw: null,
      },
    },
  ],
  facets: {
    ad_id: [
      {
        type: "range",
        data: [
          {
            from: 0,
            count: 48,
          },
        ],
      },
    ],
  },
};

let userMessage = null;
let assistantId = null;
let chatQuery = null;
let intents;

const inputInitHeight = chatInput.scrollHeight;
const createAssistant = async () => {
  try {
    const intialMessage = createChatLi("Thinking...", "incoming");
    chatBox.appendChild(intialMessage);

    const formData = new FormData();
    formData.append("create", "create");
    formData.append("assistant_name", "new_assistant_pankaj");
    formData.append("model_name", "gpt-3.5-turbo");
    formData.append("instructions", "RV Vehicles");
    formData.append("json_data", JSON.stringify(jsonFile));

    const API_URL = `https://${baseURL}/api/assistant/create_assistant/`;
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    const res = await fetch(API_URL, requestOptions);
    if (res.ok) {
      intialMessage?.remove();
      const data = await res.json();
      assistantId = data?.assistant_id;
      userMessage = userMessage;
      chatQuery = "intent";
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
  const API_URL = `https://${baseURL}/api/assistant/chat_assistant/`;

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
    if (data?.intent) {
      messageElement.remove();
      const chatLi = document.createElement("li");
      chatLi.classList.add("suggestion_box", "chatbot__chat");
      data?.intent?.forEach((inten) => {
        createSuggestionBtn(inten, "incoming");
        chatLi.appendChild(
          createSuggestionBtn(inten, "incoming", "query_from_intent")
        );
        chatBox.append(chatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
      });
    } else if (data?.new_suggestions) {
      if (data?.answer) {
        // to add single message from bot
        messageElement.textContent = data?.answer;
      } else {
        messageElement.remove();
      }
      const chatLi = document.createElement("li");
      chatLi.classList.add("suggestion_box", "chatbot__chat");
      data?.new_suggestions?.forEach((inten) => {
        createSuggestionBtn(inten, "incoming");
        chatLi.appendChild(createSuggestionBtn(inten, "incoming", "query"));
        chatBox.append(chatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
      });
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

  if (userMessage != null) {
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
  chatQuery = "query";
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
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
sendChatBtn.addEventListener("click", () => handleChat(chatInput.value.trim()));
