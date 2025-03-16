import React, { useState } from "react";
import "./ServicesSection.css";
import vector1 from "/checkup.svg";
import vector2 from "/cardio.svg";
import vector3 from "/dna.svg";
import vector4 from "/blood.svg";
import c1 from "/checkone.jpg";
import c2 from "/checktwo.jpg";

const services = [
  { name: "Free Checkup", icon: vector1 },
  { name: "Cardiogram", icon: vector2 },
  { name: "Dna Testing", icon: vector3 },
  { name: "Blood Bank", icon: vector4 },
];

function ServicesSection() {
  const [activeService, setActiveService] = useState("Cardiogram");

  return (
    <section className="services-section">
      <h4 className="subheading">CARE YOU CAN BELIEVE IN</h4>
      <h2 className="heading">Our Services</h2>

      <div className="services-container">
        <div className="services-sidebar">
          {services.map((service) => (
            <div
              key={service.name}
              className={`service-item ${activeService === service.name ? "active" : ""}`}
              onClick={() => setActiveService(service.name)}
            >
              <img src={service.icon} alt={service.name} />
              <span>{service.name}</span>
            </div>
          ))}
          <button className="view-all">View All</button>
        </div>

        <div className="services-content">
          <h3 className="content-heading">A passion for putting patients first.</h3>

          <div className="bullet-points">
            <div className="bullet"><span>•</span> A Passion for Healing</div>
            <div className="bullet"><span>•</span> 5-Star Care</div>
            <div className="bullet"><span>•</span> All our best</div>
            <div className="bullet"><span>•</span> Believe in Us</div>
            <div className="bullet"><span>•</span> A Legacy of Excellence</div>
            <div className="bullet"><span>•</span> Always Caring</div>
          </div>

          <p className="description">
            At our healthcare facility, your well-being is our top priority. With expert doctors, compassionate care, and cutting-edge technology, we ensure that you receive the best treatment with a personal touch. 
          </p>
          <p className="description">
            Your comfort, safety, and recovery matter to us. Trust us to be by your side every step of the way!
          </p>
        </div>

        <div className="services-images">
          <img src={c1} alt="Doctor with patient" />
          <img src={c2} alt="Medical team" />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
