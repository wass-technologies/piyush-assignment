import React from "react";
import "./HeroSection.css";
import doctorImage from "/doctor.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">CARING FOR LIFE</p>
        <h1 className="hero-title">Leading the Way <br /> in Medical Excellence</h1>
        <button className="services-button">Our Services</button>
      </div>

      <div className="hero-image-container">
        <img src={doctorImage} alt="Doctor" className="hero-image" />
      </div>

      <div className="appointment-buttons">
        <button className="btn dark-btn">📅 Book an Appointment</button>
        <button className="btn light-btn">👥 Book an Appointment</button>
        <button className="btn blue-btn">💰 Book an Appointment</button>
      </div>
    </section>
  );
}

export default HeroSection;
