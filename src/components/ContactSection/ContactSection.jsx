import React, { useState } from 'react';
import "./ContactSection.css";
import phoneIcon from "/emerg.svg";
import locationIcon from "/loca.svg";
import emailIcon from "/emai.svg";
import clockIcon from "/working.svg";

const contacts = [
    {
        title: "EMERGENCY",
        details: ["(123) 456-7890", "(098) 765-4321"],
        image: phoneIcon,
    },
    {
        title: "LOCATION",
        details: ["0123 Some place", "0000 Some country"],
        image: locationIcon,
    },
    {
        title: "EMAIL",
        details: ["anything14@gmail.com", "anything15@gmail.com"],
        image: emailIcon,
    },
    {
        title: "WORKING HOURS",
        details: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
        image: clockIcon,
    },
];

const ContactSection = () => {
    const [selected, setSelected] = useState(null);

  return (
    <div className="contact-section">
      <h3 className="subheading">GET IN TOUCH</h3>
      <h2 className="heading">Contact</h2>
      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`contact-card ${selected === index ? "selected" : ""}`}
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={() => setSelected(null)}
          >
            <img src={contact.image} alt={contact.title} className="contact-icon" />
            <h4 className="contact-title">{contact.title}</h4>
            {contact.details.map((line, i) => (
              <p key={i} className="contact-detail">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;