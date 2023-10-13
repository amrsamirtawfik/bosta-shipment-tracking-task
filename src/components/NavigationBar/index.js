import React from "react";
import { connect } from "react-redux"; // Import connect
import { toggleLanguage } from "../../redux/languageActions";
import { setHoveringOnTrackingMenu } from "../../redux/setHoveringOnTrackingMenu";
import BostaLogo from "../bostaLogo";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = ({
  isArabic,
  languageData,
  isHoveringOnTrackingMenu,
  toggleLanguage,
  setHoveringOnTrackingMenu,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 

  const navBarItems = languageData[isArabic ? "ar" : "en"].navBarItems; //check on the lang to pass the correct data
  const navBarPaths = languageData.paths.navBarPaths;
  return (
    <Nav isArabic={isArabic}>
      <Bars className={menuOpen ? "open" : ""} onClick={toggleMenu} />
      <NavLink to="/" className="bostaLogo">
        <BostaLogo width="100px" height="100px" />
      </NavLink>
      <NavMenu isOpen={menuOpen}>
        {navBarItems.map((item, index) => (
          <NavLink
            key={index}
            to={navBarPaths[index]}
            activeStyle={{ color: "red" }}
            className={
              item === "Track Your Shipment" || item === "تتبع شحنتك"
                ? "trackYourShipment"
                : ""
            }
            onMouseEnter={() => {
              if (item === "Track Your Shipment" || item === "تتبع شحنتك") {
                setHoveringOnTrackingMenu(true); // Dispatch the action
                
              }
            }}
            onMouseLeave={() => {
              if (item === "Track Your Shipment" || item === "تتبع شحنتك") {
                setHoveringOnTrackingMenu(false); // Dispatch the action
                
              }
            }}
          >
            {item}
          </NavLink>
        ))}

        <NavBtn onClick={toggleLanguage}>{isArabic ? "AR" : "EN"}</NavBtn>
      </NavMenu>
    </Nav>
  );
};

// Connect the component to the Redux store
const mapStateToProps = (state) => {
  return {
    isArabic: state.isArabic,
    languageData: state.languageData,
    isHoveringOnTrackingMenu: state.isHoveringOnTrackingMenu,
    // ... other props if needed
  };
};

const mapDispatchToProps = {
  toggleLanguage,
  setHoveringOnTrackingMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
