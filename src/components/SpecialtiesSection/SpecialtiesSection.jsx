import React, { useState } from "react";
import "./SpecialtiesSection.css";
import heartIcon from "/heart.svg";

const specialties = [
  "Neurology", "Bones", "Oncology", "Otorhinolaryngology",
  "Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine",
  "Gastroenterology", "Urology", "Dermatology", "Gynaecology"
];

function SpecialtiesSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Bones");

  return (
    <section className="specialties-section">
      <h4 className="subheading">ALWAYS CARING</h4>
      <h2 className="heading">Our Specialties</h2>

      <div className="specialties-grid">
        {specialties.map((specialty) => (
          <div
            key={specialty}
            className={`specialty-item ${selectedSpecialty === specialty ? "active" : ""}`}
            onClick={() => setSelectedSpecialty(specialty)}
          >
            <img src={heartIcon} alt={specialty} />
            <span>{specialty}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialtiesSection;
