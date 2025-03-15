import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import AppointmentButtons from "./components/AppointmentButton/AppointmentButtons";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <HeroSection />
      <AppointmentButtons />
      <AboutSection />
    </div>
  );
}

export default App;
