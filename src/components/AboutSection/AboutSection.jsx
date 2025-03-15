import React from "react";
import "./AboutSection.css";
import doctorsImg from "/doctorgroup.jpg";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-text">
        <h4>WELCOME TO MEDDICAL</h4>
        <h2>A Great Place to Receive Care</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque
          tortor ornare ornare. Convlis felis vitae tortor augue. Velit nascetur proin massa in.
          Consequat faucibus porttitor enim et.
        </p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
      <div className="about-image">
        <img src={doctorsImg} alt="Doctors Team" />
      </div>
    </div>
  );
}

export default AboutSection;
