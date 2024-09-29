import React from "react";
import {
  buttonPrimary,
  buttonSecondary,
  headingPrimary,
} from "../utils/StyleUtils";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="px-3 py-10 md:p-20 min-h-screen flex items-center justify-between">
      {/* Left Content */}
      <div className="space-y-8 text-center md:text-left w-full md:w-3/5">
        <div className="text-blue-600">
          <p className=" md:text-3xl font-bold">
            My name is <span className="text-blue-500">Suman Dhamala</span>
          </p>
          <p className="text-4xl md:text-6xl font-bold">I'm a Cryo Engineer</p>
        </div>

        <p className={`text-lg md:text-xl  leading-relaxed `}>
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
      <div className="hidden md:block w-full md:w-2/5 text-center">
        <img
          src="https://via.placeholder.com/400" // Replace with your image URL
          alt="Suman Dhamala"
          className="rounded-lg shadow-lg object-cover h-96 w-96"
        />
      </div>
    </div>
  );
}
