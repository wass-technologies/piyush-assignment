import React from "react";
import "./HeroSection.css";
import calendarImage from "/Calendar.svg";
import teamImage from "/Team.svg";
import cashImage from "/Cash.svg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">CARING FOR LIFE</p>
        <h1 className="hero-title">Leading the Way <br /> in Medical Excellence</h1>
        <button className="services-button">Our Services</button>
      </div>

      <div className="appointment-buttons">
        <button className="btn dark-btn">Book an Appointment<img src={calendarImage} /></button>
        <button className="btn light-btn">Book an Appointment<img src={teamImage} /></button>
        <button className="btn blue-btn">Book an Appointment<img src={cashImage} /></button>
      </div>
    </section>
  );
}

export default HeroSection;
