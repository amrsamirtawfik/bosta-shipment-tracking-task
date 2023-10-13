import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./trackingMenuContainer.css";

function TrackingMenuContainer(props) {
  const [onTrackingMenu, setOnTrackingMenu] = useState(false);

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
          console.log(searchText);
        }}
      />
    </div>
  );
}
export default TrackingMenuContainer;
