import React from "react";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
import ParticlesComponent from "./ParticlesComponent";
import { useSelector } from "react-redux";

export default function MainContainer() {
  const isDarkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <Navbar />
      <Element name="homeSection">
        <Home />
      </Element>

      <Element name="aboutSection">
        <About />
      </Element>

      <Element name="resumeSection">
        <Resume />
      </Element>

      <Element name="contactSection">
        <Contact />
      </Element>

      <ParticlesComponent id="particlesBackground" isDarkMode={isDarkMode} />
    </>
  );
}
