import React from "react";
import { connect } from "react-redux";
import FullTable from "../components/table/fullTable";
import "./TrackYourShipment.css";
import IsThereAnyProblems from "../components/IsThereAnyProblems";
import AddressContainer from "../components/adressContainer";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import DoneSvg from "../assets/images/DoneSvg";
import DelevirySvg from "../assets/images/deleviryIcon";
import DeleviredSvg from "../assets/images/DeleviredSvg";
function TrackYourShipment({ isArabic, languageData }) {
  console.log(`
  inside trackYourShipment
    isArabic: ${isArabic}
    languageData: ${JSON.stringify(languageData, null, 2)}
    `);
  let headersListOfPastStates = [];
  let tableData = [];
  const progressTrackerConfig = {
    isArabic: isArabic,
    activeColor: "#00FF1E",
    steps: [
      {
        label: "Step 1",
        activeStep: <DoneSvg width="40px" height="40px" color="white" />,
        nonActiveStep: <DoneSvg width="20px" height="20px" color="grey" />,
      },
      {
        label: "Step 2",

        activeStep: <DoneSvg width="40px" height="40px" color="white" />,
        nonActiveStep: <DoneSvg width="20px" height="20px" color="grey" />,
      },
      {
        label: "Step 3",

        activeStep: <DelevirySvg width="40px" height="40px" color="white" />,
        nonActiveStep: <DelevirySvg width="20px" height="20px" color="grey" />,
      },
      {
        label: "Step 4",

        activeStep: <DeleviredSvg width="40px" height="40px" color="white" />,
        nonActiveStep: <DeleviredSvg width="20px" height="20px" color="grey" />,
      },
    ],
    header: [],
  };

  try {
    headersListOfPastStates =
      languageData[isArabic ? "ar" : "en"].pastStatesTable;
    tableData = [
      headersListOfPastStates,
      headersListOfPastStates,
      headersListOfPastStates,
      headersListOfPastStates,
      headersListOfPastStates,
    ];
    progressTrackerConfig.header = [
      headersListOfPastStates,
      headersListOfPastStates,
    ];
  } catch (error) {}

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

// Connect the component to the Redux store
const mapStateToProps = (state) => {
  return {
    isArabic: state.centralizedData.isArabic,
    languageData: state.centralizedData.languageData,
    // ... other props if needed
  };
};

export default connect(mapStateToProps)(TrackYourShipment);
