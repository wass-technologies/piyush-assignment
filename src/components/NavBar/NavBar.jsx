import React from "react";
import "./NavBar.css";
import searchIcon from "/Search.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="menu-items">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <div className="search-container">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>
          <button className="appointment-btn">Appointment</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
