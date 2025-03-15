import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Doctors</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="appointment-btn">Appointment</button>
    </nav>
  );
}

export default NavBar;
