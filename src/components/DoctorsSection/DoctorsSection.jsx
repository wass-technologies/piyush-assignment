import React from "react";
// import "./DoctorsSection.css";
import doctor1 from "/docone.svg";
import doctor2 from "/doctwo.svg";
import doctor3 from "/docthree.svg";
import linkedinIcon from "/linkedin.svg";
import facebookIcon from "/facebook.svg";
import instagramIcon from "/instagram.svg";

const doctors = [
    { id: 1, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor1 },
    { id: 2, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor2 },
    { id: 3, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor3 },
    { id: 4, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor1 },
    { id: 5, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor2 },
    { id: 6, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor3 },
    { id: 7, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor1 },
    { id: 8, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor2 },
    { id: 9, name: "Doctor’s Name", specialty: "NEUROLOGY", image: doctor3 },
]

function DoctorsSection() {
    const [currentIndex, setCurrentIndex] = (0);

    const nextSlide = (index) => {
        setCurrentIndex(index * 3);
    }

    return (
        <div className="doctors-section">
            <p className="subheading">Trusted Care</p>
            <h2 className="heading">Our Doctors</h2>
            <div className="doctors-container">
                {doctors.slice(currentIndex, currentIndex + 3).map(doctor => (
                    <div className="doctor-card" key={doctor.id}>
                        <img src={doctor.image} alt="doctor" classNames="doctor-image" />
                        <div className="doctor-info">
                            <p className="doctor-name">{doctor.name}</p>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <div className="social-icons">
                                <img src={linkedinIcon} alt="linkedin" />
                                <img src={facebookIcon} alt="facebook" />
                                <img src={instagramIcon} alt="instagram" />
                            </div>
                        </div>
                        <button classsName="view-profile">View Profile</button>
                    </div>
                ))}
            </div>
            <div className="carousel-buttons">
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        className={`carousel-btn ${currentIndex / 3 === index ? "active" : ""}`}
                        onClick={() => nextSlide(index)}
                        ></button>
                ))}
            </div>
        </div>  
    );
}

export default DoctorsSection;