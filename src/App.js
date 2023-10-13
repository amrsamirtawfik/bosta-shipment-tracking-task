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
import TrackingMenuContainer from "./components/trackingMenuContainer";
import { setHoveringOnTrackingMenu } from "./redux/setHoveringOnTrackingMenu";
import { useState } from "react";
function App({
  isArabic,
  isHoveringOnTrackingMenu,
  setHoveringOnTrackingMenu,
}) {
  const [onTrackingMenu, setOnTrackingMenu] = useState(false);

  const handleOnTrackingMenuChange = (newState) => {
    setOnTrackingMenu(newState);
  };
  return (
    <div className={`App ${isArabic ? "isArabic" : ""}`}>
      <Router>
        <Navbar />
        {(isHoveringOnTrackingMenu || onTrackingMenu) && (
          <TrackingMenuContainer
            className={`tracking-menu-container ${isArabic ? 'isArabic' : 'isEnglish'}`}
            passOnTrackingMenu={handleOnTrackingMenuChange}
          />
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Prices" element={<Prices />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/trackYourShipment" element={<TrackYourShipment />} />
        </Routes>
      </Router>
      <header className="App-header"></header>
    </div>
  );
}

// Connect the component to the Redux store
const mapStateToProps = (state) => {
  return {
    isArabic: state.isArabic,
    isHoveringOnTrackingMenu: state.isHoveringOnTrackingMenu,
    // ... other props if needed
  };
};

const mapDispatchToProps = {
  setHoveringOnTrackingMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
