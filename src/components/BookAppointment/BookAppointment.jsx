import React from "react";
import "./BookAppointment.css";

function BookAppointment() {
  return (
    <div className="appointment-section">
      <div className="appointment-form">
        <div className="form-row">
          <input type="text" placeholder="Name" />
          <select>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
        </div>
        <div className="form-row">
          <input type="date" placeholder="Date" />
          <select>
            <option>Time</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
          </select>
        </div>
        <div className="form-row">
          <select>
            <option>Doctor</option>
            <option>Dr. Smith</option>
            <option>Dr. Johnson</option>
          </select>
          <select>
            <option>Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
          </select>
        </div>
        <textarea placeholder="Message"></textarea>
        <button type="submit">SUBMIT</button>
      </div>
    </div>
  );
}

export default BookAppointment;
