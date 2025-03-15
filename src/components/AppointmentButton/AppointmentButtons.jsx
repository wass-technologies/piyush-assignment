import React from "react";
import "./AppointmentButtons.css";

function AppointmentButtons() {
  return (
    <div className="appointment-buttons">
      <button className="app-btn dark-btn">Book an Appointment</button>
      <button className="app-btn light-btn">Book an Appointment</button>
      <button className="app-btn medium-btn">Book an Appointment</button>
    </div>
  );
}

export default AppointmentButtons;
