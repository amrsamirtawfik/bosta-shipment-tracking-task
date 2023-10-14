import "./App.css";
import Navbar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { connect } from "react-redux";
import HomePage from "./pages/HomePage";
import Prices from "./pages/Prices";
import Sales from "./pages/Sales";
import SignIn from "./pages/SignIn";
import TrackYourShipment from "./pages/TrackYourShipment";
import TrackingMenuContainer from "./components/trackingPopUp/trackingMenuContainer";
import { setHoveringOnTrackingMenu } from "./redux/setHoveringOnTrackingMenu";
import { useState } from "react";
import { shipmentApiRequest } from "./redux/shipmentApiRequest";

function App({
  isArabic,
  isHoveringOnTrackingMenu,
  shipmentData,
  setHoveringOnTrackingMenu,
  shipmentApiRequest,
}) {
  const [onTrackingMenu, setOnTrackingMenu] = useState(false);

  const handleSearch = (searchText) => {
    shipmentApiRequest(searchText);
  };
  const handleOnTrackingMenuChange = (newState) => {
    setOnTrackingMenu(newState);
  };

  
  return (
    <div className={`App ${isArabic ? "isArabic" : ""}`}>
      <Router>
        <Navbar />
        {(isHoveringOnTrackingMenu || onTrackingMenu) && (
          <TrackingMenuContainer
            className={`tracking-menu-container ${
              isArabic ? "isArabic" : "isEnglish"
            }`}
            passOnTrackingMenu={handleOnTrackingMenuChange}
            placeHolder={`${isArabic ? "رقم التتبع" : "Tracking Number"}`}
            onSearch={(searchText) => {
              handleSearch(searchText);
            }}
          />
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Prices" element={<Prices />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route
            path="/trackYourShipment/:trackingNumber"
            element={<TrackYourShipment />}
          />
        </Routes>
      </Router>
      <header className="App-header"></header>
    </div>
  );
}

// Connect the component to the Redux store
const mapStateToProps = (state) => {
  return {
    isArabic: state.centralizedData.isArabic,
    isHoveringOnTrackingMenu: state.centralizedData.isHoveringOnTrackingMenu,
    shipmentData: state.centralizedData.shipmentData,
    // ... other props if needed
  };
};

const mapDispatchToProps = {
  setHoveringOnTrackingMenu,
  shipmentApiRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
