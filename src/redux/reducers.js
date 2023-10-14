import { formatDateAndTime } from "./formateDataAndTime"; //return {date,time}

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
  shipmentData: {},
  /**
  valid: true,false 
  ar:{
    uiStates: [
      {
        branch:,
        date:,
        time:,
        details:,
        additional:,
      }
      
      ,{},{},{}]
    allStates: [{}] 
   }
   */
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
    case "TRACKING_SHIPMENT_REQUEST":
      //handle recevied shipment details here
      let shipmentRes = {
        valid: true,
        activeColor: "#CCC",
        promisedDate: formatDateAndTime(action.payload.PromisedDate).date,
        trackingNumber: action.payload.TrackingNumber,
        sellerName: "SOUQ", //assuming it's get from the api
        CurrentStatus: {
          ar: "",
          en: "",
          date:
            formatDateAndTime(action.payload.CurrentStatus.timestamp).date +
            " || " +
            formatDateAndTime(action.payload.CurrentStatus.timestamp).time,
        },
        customerAdress:
          "امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 Cairo", //assuming it's get from the api

        ar: {
          uiStates: [],
          allStates: [],
        },
        en: {
          uiStates: [],
          allStates: [],
        },
      };
      let arStateObject, enStateObject;
      let date, time;

      if (action.payload.hasOwnProperty("error")) {
        shipmentRes = { valid: false };
      } else {
        for (const transitEvent of action.payload.TransitEvents) {
          switch (transitEvent.state) {
            case "TICKET_CREATED":
              ({ date, time } = formatDateAndTime(transitEvent.timestamp));

              arStateObject = {
                branch: "مدينة نصر",
                date: date,
                time: time,
                details: "تم إنشاء الشحنة",
                addtional: "",
              };
              enStateObject = {
                branch: "Nasr city",
                date: date,
                time: time,
                details: "Shipment created",
                addtional: "",
              };
              shipmentRes.activeColor = "#000";
              shipmentRes.ar.uiStates[0] = arStateObject;
              shipmentRes.ar.allStates.push(arStateObject);
              shipmentRes.en.uiStates[0] = enStateObject;
              shipmentRes.en.allStates.push(enStateObject);

              break;
            case "PACKAGE_RECEIVED":
              ({ date, time } = formatDateAndTime(transitEvent.timestamp));

              arStateObject = {
                branch: "مدينة نصر",
                date: date,
                time: time,
                details: "تم استلام الشحنة من التاجر",
                addtional: "",
              };
              enStateObject = {
                branch: "Nasr city",
                date: date,
                time: time,
                details: "Shipment received from seller",
                addtional: "",
              };
              shipmentRes.activeColor = "#CCC";

              shipmentRes.ar.uiStates[1] = arStateObject;
              shipmentRes.ar.allStates.push(arStateObject);
              shipmentRes.en.uiStates[1] = enStateObject;
              shipmentRes.en.allStates.push(enStateObject);

              break;
            case "IN_TRANSIT":
              break;
            case "OUT_FOR_DELIVERY":
              ({ date, time } = formatDateAndTime(transitEvent.timestamp));

              arStateObject = {
                branch: "مدينة نصر",
                date: date,
                time: time,
                details: "الشحنة خرجت للتسليم",
                addtional: "",
              };
              enStateObject = {
                branch: "Nasr city",
                date: date,
                time: time,
                details: "Shipment is out for delivery",
                addtional: "",
              };
              shipmentRes.activeColor = "#CCC";
              shipmentRes.ar.uiStates[2] = arStateObject;
              shipmentRes.ar.allStates.push(arStateObject);
              shipmentRes.en.uiStates[2] = enStateObject;
              shipmentRes.en.allStates.push(enStateObject);

              break;
            case "WAITING_FOR_CUSTOMER_ACTION":
              ({ date, time } = formatDateAndTime(transitEvent.timestamp));
              arStateObject = {
                branch: "مدينة نصر",
                date: date,
                time: time,
                details: "في انتظار إجراء العميل",
                addtional: "",
              };
              enStateObject = {
                branch: "Nasr city",
                date: date,
                time: time,
                details: "Waiting for customer action",
                addtional: "",
              };

              if (transitEvent.hasOwnProperty("reason")) {
                switch (transitEvent.reason) {
                  case "Postponed - the customer requested postponement for another day.":
                    arStateObject.addtional =
                      "تأجيل - طلب العميل تأجيلًا ليوم آخر.";
                    enStateObject.addtional =
                      "Postponed - the customer requested a postponement for another day.";
                    break;
                  case "Retry delivery - the customer is not in the address.":
                    arStateObject.addtional = "العميل غير متواجد في العنوان";
                    enStateObject.addtional = "Customer is not in the address";
                    break;
                  case "Customer is not answering.":
                    arStateObject.addtional = "العميل لا يرد";
                    enStateObject.addtional = "Customer is not answering";
                    break;
                  default:
                    arStateObject.addtional = "في انتظار إجراء العميل";
                    enStateObject.addtional = "Waiting for customer action";
                }
              }
              shipmentRes.ar.uiStates[2].addtional = arStateObject.addtional; //additing this state as an additional to the last state
              shipmentRes.activeColor = "#f9ba02";
              shipmentRes.ar.allStates.push(arStateObject);

              shipmentRes.en.uiStates[2].addtional = enStateObject.addtional;

              shipmentRes.en.allStates.push(enStateObject);

              break;
            case "NOT_YET_SHIPPED":
              break;
            case "DELIVERED_TO_SENDER":
              ({ date, time } = formatDateAndTime(transitEvent.timestamp));

              arStateObject = {
                branch: "مدينة نصر",
                date: date,
                time: time,
                details: "تم الغاء الشحنة من التاجر",
                addtional: "",
              };
              enStateObject = {
                branch: "Nasr city",
                date: date,
                time: time,
                details: "Shipment was cancelled from the seller",
                addtional: "",
              };

              shipmentRes.ar.uiStates[2].addtional = arStateObject.details; //additing this state as an additional to the last state

              shipmentRes.ar.allStates.push(arStateObject);
              shipmentRes.activeColor = "#E30613";

              shipmentRes.en.uiStates[2].addtional = enStateObject.details;
              shipmentRes.en.allStates.push(enStateObject);

              break;
            case "CANCELLED":
              ({ date, time } = formatDateAndTime(transitEvent.timestamp));

              arStateObject = {
                branch: "مدينة نصر",
                date: date,
                time: time,
                details: "تم الغاء الشحنة",
                addtional: "",
              };
              enStateObject = {
                branch: "Nasr city",
                date: date,
                time: time,
                details: "Cancelled",
                addtional: "",
              };
              shipmentRes.activeColor = "#f9ba02";
              shipmentRes.ar.uiStates.push(arStateObject);
              shipmentRes.ar.allStates.push(arStateObject);
              shipmentRes.en.uiStates.push(enStateObject);
              shipmentRes.en.allStates.push(enStateObject);

              break;
            case "DELIVERED":
              ({ date, time } = formatDateAndTime(transitEvent.timestamp));

              arStateObject = {
                branch: "مدينة نصر",
                date: date,
                time: time,
                details: "تم تسليم الشخنة",
                addtional: "",
              };
              enStateObject = {
                branch: "Nasr city",
                date: date,
                time: time,
                details: "Shipment delevired",
                addtional: "",
              };
              shipmentRes.activeColor = "#36b600";
              shipmentRes.ar.uiStates[3] = arStateObject;
              shipmentRes.ar.allStates.push(arStateObject);
              shipmentRes.en.uiStates[3] = enStateObject;
              shipmentRes.en.allStates.push(enStateObject);

              break;
            default:
          }
        }
      }
      switch (action.payload.CurrentStatus.state) {
        case "TICKET_CREATED":
          shipmentRes.CurrentStatus.ar = "تم انشاء الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment created";
          break;

        case "PACKAGE_RECEIVED":
          shipmentRes.CurrentStatus.ar = "تم استلام الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment in store";
          break;
        case "IN_TRANSIT":
          shipmentRes.CurrentStatus.ar = "الشحنة تنتقل لمخزن اخر";
          shipmentRes.CurrentStatus.en = "Transferring to another store";
          break;
        case "OUT_FOR_DELIVERY":
          shipmentRes.CurrentStatus.ar = "خرجت للتسليم";
          shipmentRes.CurrentStatus.en = "Out for delivery";
          break;
        case "WAITING_FOR_CUSTOMER_ACTION":
          shipmentRes.CurrentStatus.ar = "لم يتم تسليم الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment isn't received";
          break;
        case "NOT_YET_SHIPPED":
          shipmentRes.CurrentStatus.ar = "لم يتم تسليم الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment isn't received";
          break;
        case "DELIVERED_TO_SENDER":
          shipmentRes.CurrentStatus.ar = "تم الغاء الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment deleted";
          break;
        case "CANCELLED":
          shipmentRes.CurrentStatus.ar = "تم الغاء الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment deleted";
          break;
        case "DELIVERED":
          shipmentRes.CurrentStatus.ar = "تم استلام الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment received";
          break;
        default:
          shipmentRes.CurrentStatus.ar = "تم انشاء الشحنة";
          shipmentRes.CurrentStatus.en = "Shipment created";
          break;
      }
      
      return {
        ...state,
        shipmentData: shipmentRes,
      };
    default:
      return state;
  }
}

export default languageReducer;
