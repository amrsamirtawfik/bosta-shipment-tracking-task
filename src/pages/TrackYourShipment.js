import React from "react";
import { connect } from "react-redux";
import FullTable from "../components/table/fullTable";
import "./TrackYourShipment.css";
import IsThereAnyProblems from "../components/IsThereAnyProblems";

function TrackYourShipment({ isArabic, languageData }) {
  console.log(`
  inside trackYourShipment
    isArabic: ${isArabic}
    languageData: ${JSON.stringify(languageData, null, 2)}
    `);
  let headersListOfPastStates = [];
  let tableData = [];
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
      <IsThereAnyProblems question="هل لديك مشكلة؟" buttonText="ابلاغ عن مشكلة"/>
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
