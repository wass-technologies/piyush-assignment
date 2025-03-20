import React from "react";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  return (
    <div className="appointment-section">
      <div className="appointment-text">
        <h2>Book an Appointment</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>
      <div className="appointment-form">
        <div className="form-row">
          <input type="text" placeholder="Name" className="input-field" />
          <select className="input-field">
            <option>Gender</option>
          </select>
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="text" placeholder="Phone" className="input-field" />
        </div>
        <div className="form-row">
          <input type="date" className="input-field" />
          <select className="input-field">
            <option>Time</option>
          </select>
        </div>
        <div className="form-row">
          <select className="input-field">
            <option>Doctor</option>
          </select>
          <select className="input-field">
            <option>Department</option>
          </select>
        </div>
        <textarea className="textarea-field" placeholder="Message"></textarea>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
};

export default AppointmentForm;
