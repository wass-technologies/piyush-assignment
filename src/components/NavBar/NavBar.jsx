import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input
          type="checkbox"
          id="menu-toggle"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <div className="hamburger-lines" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
          <li className="search-container">
            <input type="text" id="search-input" placeholder="Search..." />
            <button id="search-btn">🔍</button>
          </li>
          <li>
            <button className="appointment-btn">Appointment</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;
