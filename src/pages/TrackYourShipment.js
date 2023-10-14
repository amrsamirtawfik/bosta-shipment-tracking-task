import React, { useEffect } from "react";
import { connect } from "react-redux";
import FullTable from "../components/table/fullTable";
import "./TrackYourShipment.css";
import IsThereAnyProblems from "../components/IsThereAnyProblems";
import AddressContainer from "../components/adressContainer";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import DoneSvg from "../assets/images/DoneSvg";
import DelevirySvg from "../assets/images/deleviryIcon";
import DeleviredSvg from "../assets/images/DeleviredSvg";
import { useParams } from "react-router-dom";
import { shipmentApiRequest } from "../redux/shipmentApiRequest";
import { useState } from "react";

function TrackYourShipment({
  isArabic,
  languageData,
  shipmentData,
  shipmentApiRequest,
}) {
  const { trackingNumber } = useParams();
  const [loading, setLoading] = useState(true); // State to track loading

  
  useEffect(() => {
    shipmentApiRequest(trackingNumber).then(() => {
      console.log("finished calling");
      setLoading(false);
    });
  }, [trackingNumber]);

  if (loading) {
    return <div>Loading ...</div>;
  } else {
    let headersListOfPastStates = [];
    let tableData = [];
    let progressTrackerConfig = {};

    try {
      if (!shipmentData.valid)
        return (
          <div className="no-shipment-section">
            No shipment with this number. Please enter another value.
          </div>
        );
      progressTrackerConfig = {
        isArabic: isArabic,
        activeColor: shipmentData.activeColor,
        numberOfActiveSteps: shipmentData.ar.uiStates.length,
        activeMsg: shipmentData[isArabic ? "ar" : "en"].uiStates.length>2?  shipmentData[isArabic ? "ar" : "en"].uiStates[2].addtional
          : "",
        steps: [
          {
            label: shipmentData["ar"].uiStates[0]
              ? shipmentData[isArabic ? "ar" : "en"].uiStates[0].details
              : `${isArabic ? "تم انشاء الشحنة" : "Shipment is created"}`,
            activeStep: <DoneSvg width="40px" height="40px" color="white" />,
            nonActiveStep: <DoneSvg width="20px" height="20px" color="grey" />,
          },
          {
            label: shipmentData["ar"].uiStates[1]
              ? shipmentData[isArabic ? "ar" : "en"].uiStates[1].details
              : `${isArabic ? "تم استلام الشحنة" : "Shipment is received"}`,

            activeStep: <DoneSvg width="40px" height="40px" color="white" />,
            nonActiveStep: <DoneSvg width="20px" height="20px" color="grey" />,
          },
          {
            label: shipmentData["ar"].uiStates[2]
              ? shipmentData[isArabic ? "ar" : "en"].uiStates[2].details
              : `${
                  isArabic
                    ? "الشحنة خرجت للتسليم"
                    : "Shipment is ready for deleviry"
                }`,

            activeStep: (
              <DelevirySvg width="40px" height="40px" color="white" />
            ),
            nonActiveStep: (
              <DelevirySvg width="20px" height="20px" color="grey" />
            ),
          },
          {
            label: shipmentData["ar"].uiStates[3]
              ? `${shipmentData[isArabic ? "ar" : "en"].uiStates[3].details}
     
             ${shipmentData[isArabic ? "ar" : "en"].uiStates[3].addtional}`
              : `${isArabic ? "تم تسليم الشحنة" : "Shipment is delevired"}`,

            activeStep: (
              <DeleviredSvg width="40px" height="40px" color="white" />
            ),
            nonActiveStep: (
              <DeleviredSvg width="20px" height="20px" color="grey" />
            ),
          },
        ],
        header: [],
      };
      headersListOfPastStates =
        languageData[isArabic ? "ar" : "en"].pastStatesTable;
      tableData = shipmentData[isArabic ? "ar" : "en"].allStates.map((item) => {
        return [
          item.branch,
          item.date,
          item.time,
          item.details + "\n" + (item.additional ? item.additional : ""),
        ];
      });
      progressTrackerConfig.header = isArabic
        ? [
            [
              `رقم الشحنة ${shipmentData.trackingNumber}`,
              "اخر تحديث",
              "اسم التاجر",
              "موعد التسليم خلال",
            ],
            [
              shipmentData.CurrentStatus.ar,
              shipmentData.CurrentStatus.date,
              shipmentData.sellerName,
              shipmentData.promisedDate,
            ],
          ]
        : [
            [
              `Shipment number ${shipmentData.trackingNumber}`,
              "Last update",
              "Seller name",
              "Delivery time through",
            ],
            [
              shipmentData.CurrentStatus.en,
              shipmentData.CurrentStatus.date,
              shipmentData.sellerName,
              shipmentData.promisedDate,
            ],
          ];
    } catch (error) {
      console.error(error);
      return <div>Oops! Some error happened. Please try again later.</div>;
    }

    return (
      <div className="track-your-shipment-page">
        <ProgressBar progressTrackerConfig={progressTrackerConfig} />
        <div className="information-section">
          <div className="shipment-details">
            <h5>تفاصيل الشحنة</h5>
            <FullTable
              headerList={headersListOfPastStates}
              tableData={tableData}
            />
          </div>

          <div className="adress-question-section">
            <h5>عنوان التسليم</h5>
            <AddressContainer address="امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 Cairo" />
            <IsThereAnyProblems
              question="هل لديك مشكلة؟"
              buttonText="ابلاغ عن مشكلة"
            />
          </div>
        </div>
      </div>
    );
  }
}

// Connect the component to the Redux store
const mapStateToProps = (state) => {
  
  return {
    isArabic: state.centralizedData.isArabic,
    languageData: state.centralizedData.languageData,
    shipmentData: state.centralizedData.shipmentData,
    // ... other props if needed
  };
};

const mapDispatchToProps = {
  shipmentApiRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackYourShipment);
