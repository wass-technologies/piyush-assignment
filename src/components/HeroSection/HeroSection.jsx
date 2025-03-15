import React from "react";
import "./HeroSection.css";
import doctorImg from "/doctor.png";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3>Caring for Life</h3>
        <h1>Leading the Way in Medical Excellence</h1>
        <button className="services-btn">Our Services</button>
      </div>
      <div className="hero-image">
        <img src={doctorImg} alt="Doctor" />
      </div>
    </div>
  );
}

export default HeroSection;
