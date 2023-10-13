const initialState = {
  isArabic: true,
  isHoveringOnTrackingMenu: false,
  languageData: {
    paths: {
      navBarPaths: ["/", "/Prices", "/Sales", "/trackYourShipment", "/signIn"],
    },
    en: {
      navBarItems: [
        "Home",
        "Prices",
        "Sales",
        "Track Your Shipment",
        "Sign In",
      ],
      pastStatesTable: ["Branch", "Date", "Time", "Details"],
      // Other English translations
    },
    ar: {
      navBarItems: [
        "الرئيسية",
        "الأسعار",
        "المبيعات",
        "تتبع شحنتك",
        "تسجيل دخول",
      ],
      pastStatesTable: ["الفرع", "التاريخ", "الوقت", "تفاصيل"],
      // Other Arabic translations
    },
  },
};

function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        isArabic: !state.isArabic,
      };
    case "SET_HOVERING_ON_TRACKING_MENU":
      return {
        ...state,
        isHoveringOnTrackingMenu: action.payload,
      };
    default:
      return state;
  }
}

export default languageReducer;
