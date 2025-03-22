import React from "react";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  return (
    <div className="appointment-section" style={{ backgroundImage: "url(appformbg.png)" }}>
      <div className="appointment-content">
        <h2 className="heading">Book an Appointment</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in.
        </p>
      </div>
      <form className="appointment-form">
        <div className="form-row">
          <input type="text" placeholder="Name" />
          <select>
            <option>Gender</option>
          </select>
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
        </div>
        <div className="form-row">
          <input type="date" placeholder="Date" />
          <input type="time" placeholder="Time" />
        </div>
        <div className="form-row">
          <select>
            <option>Doctor</option>
          </select>
          <select>
            <option>Department</option>
          </select>
        </div>
        <textarea placeholder="Message"></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AppointmentForm;