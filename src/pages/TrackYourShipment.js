import React from "react";
import { connect } from "react-redux";
import FullTable from "../components/table/fullTable";
import "./TrackYourShipment.css";
import IsThereAnyProblems from "../components/IsThereAnyProblems";
import AddressContainer from "../components/adressContainer";
import ProgressBarHeader from "../components/ProgressBar/ProgressBarHeader";
import ProgressTracker from "../components/progressTracker";

function TrackYourShipment({ isArabic, languageData }) {
  console.log(`
  inside trackYourShipment
    isArabic: ${isArabic}
    languageData: ${JSON.stringify(languageData, null, 2)}
    `);
  let headersListOfPastStates = [];
  let tableData = [];
  let state = {
    currentStage: 2, // Change this value to the current stage.
    stagesData: [
      {
        photo: "stage1.jpg",
      },
      {
        photo: "stage2.jpg",
      },
      {
        photo: "stage3.jpg",
      },
      {
        photo: "stage4.jpg",
      },
    ],
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
  } catch (error) {}
  return (
    <div>
      <div className="shipment-details">
        <h5>تفاصيل الشحنة</h5>
        <FullTable headerList={headersListOfPastStates} tableData={tableData} />
      </div>
      <ProgressBarHeader
        progressBarHeader={[headersListOfPastStates, headersListOfPastStates]}
      />
      <ProgressTracker
        currentStage={state.currentStage}
        stagesData={state.stagesData}
      />

      <AddressContainer address="امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 Cairo" />
      <IsThereAnyProblems
        question="هل لديك مشكلة؟"
        buttonText="ابلاغ عن مشكلة"
      />
    </div>
  );
}

// Connect the component to the Redux store
const mapStateToProps = (state) => {
  return {
    isArabic: state.isArabic,
    languageData: state.languageData,
    // ... other props if needed
  };
};

export default connect(mapStateToProps)(TrackYourShipment);
