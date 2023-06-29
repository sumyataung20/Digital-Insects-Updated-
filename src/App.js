import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import Service from "./components/Service";
import ChooseYourPath from "./components/Chooseurpath";

import Aboutus from "./components/Aboutus";
import Contact from "./components/Contactus";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";
import React from "react";

function App() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <Benefits />
      <Service />
      <ChooseYourPath />

      <Aboutus />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
