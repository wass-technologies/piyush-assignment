import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import SpecialtiesSection from "./components/SpecialtiesSection/SpecialtiesSection";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import DoctorsSection from "./components/DoctorsSection/DoctorsSection";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecialtiesSection />
      <AppointmentForm />
      <DoctorsSection />
    </div>
  );
}

export default App;
