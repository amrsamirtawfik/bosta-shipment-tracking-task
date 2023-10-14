import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./trackingMenuContainer.css";
import { useNavigate } from "react-router-dom";

function TrackingMenuContainer(props) {
  const [onTrackingMenu, setOnTrackingMenu] = useState(false);
  const navigate = useNavigate();

  const handleTrackingMenuEnter = () => {
    setOnTrackingMenu(true);
    props.passOnTrackingMenu(true); // Pass the state change to the parent
  };

  const handleTrackingMenuLeave = () => {
    setOnTrackingMenu(false);
    props.passOnTrackingMenu(false); // Pass the state change to the parent
  };

  return (
    <div
      className={props.className}
      onMouseEnter={handleTrackingMenuEnter}
      onMouseLeave={handleTrackingMenuLeave}
    >
      <h4>Track your shipment!</h4>
      <SearchBar
        onSearch={(searchText) => {
          props.onSearch(searchText);
          navigate(`/trackYourShipment/${searchText}`);
        }}
        placeHolder={props.placeHolder}
      />
    </div>
  );
}
export default TrackingMenuContainer;
