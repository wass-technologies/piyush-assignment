import React from "react";
import "./TopBar.css";
import clockIcon from "/Clock.svg";
import locationIcon from "/Location.svg";
import phoneIcon from "/Phone.svg";

function TopBar() {
  return (
    <div className="top-bar">
      <h1 className="logo">MED<span>DICAL</span></h1>
      <div className="top-info-container">
        <div className="top-info">
          <img src={phoneIcon} alt="Emergency" />
          <span>EMERGENCY <br />(237) 681-812-255</span>
        </div>
        <div className="top-info">
          <img src={clockIcon} alt="Work Hour" />
          <span>WORK HOUR <br />09:00 - 20:00 Everyday</span>
        </div>
        <div className="top-info">
          <img src={locationIcon} alt="Location" />
          <span>LOCATION <br />0123 Some Place</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
