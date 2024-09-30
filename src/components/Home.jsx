import React from "react";
import { buttonPrimary, buttonSecondary } from "../utils/StyleUtils";
import { Link } from "react-scroll";
import SumanProfile from "../assets/images/SumanProfile.png";
import HardwareImage from "../assets/images/hardwareBackground.jpg";

export default function Home() {
  return (
    <div className="px-3 py-10 md:p-20 min-h-screen flex items-center justify-between gap-10">
      {/* Left Content */}
      <div className="space-y-8 text-center md:text-left w-full md:w-3/5">
        <div className="text-primary">
          <p className=" md:text-3xl font-bold">
            My name is <span>Suman Dhamala</span>
          </p>
          <p className="text-4xl md:text-6xl font-bold">I'm a Cryo Engineer</p>
        </div>

        <p className={`text-lg md:text-xl leading-relaxed`}>
          I specialize in cryogenics, a cutting-edge field that bridges the gap
          between science and technology. Let's work together to explore the
          future of engineering!
        </p>

        {/* Buttons */}
        <div className="space-x-2 md:space-x-5 pt-5 flex items-center justify-center md:justify-start">
          <Link
            to="resumeSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <span
              className={`${buttonSecondary} md:text-xl font-medium flex justify-center items-center transition duration-300  hover:text-white`}
            >
              My Resume&nbsp;
              <span className="fa-solid fa-user-tie"></span>
            </span>
          </Link>

          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <span
              className={`${buttonPrimary} md:text-xl font-medium flex justify-center items-center transition duration-300 hover:bg-blue-700 hover:text-white`}
            >
              Contact Me&nbsp;
              <span className="fa-solid fa-phone"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="hidden md:block h-[380px] w-[380px] text-center relative rounded-full overflow-hidden  border-8 border-[#9c9723]" // Added overflow-hidden to ensure content fits
        style={{
          backgroundImage: `url(${HardwareImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {" "}
          {/* Centering div */}
          <img
            src={SumanProfile}
            alt="Suman Dhamala"
            className="rounded-full object-cover h-[100%] w-[100%]" // Adjusting image size to fit within the circular container
          />
        </div>
        <div
          className="absolute top-0 left-0 h-full w-full rounded-full z-0 "
          style={{
            background: "rgba(0, 0, 0, 0.7)", // Optional overlay to blend better
          }}
        ></div>
      </div>
    </div>
  );
}
