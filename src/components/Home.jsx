import React from "react";
import { buttonPrimary, buttonSecondary } from "../utils/StyleUtils";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="px-3 py-10 md:p-20 min-h-screen flex flex-col items-center justify-center">
      <div className="space-y-5 text-center p-3">
        <p className="text-xl md:text-2xl">Hello, this is a portfolio page</p>

        <div className="text-primary">
          <p className="text-4xl md:text-6xl font-medium">
            My name is John Doe
          </p>
          <p className="text-4xl md:text-6xl font-medium">
            I'm a Lorem ipsum dolor sit amet.
          </p>
        </div>

        <p className="text-xl md:text-2xl md:w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          cumque aut quidem assumenda, commodi unde sapiente. Neque tempore
          consequatur recusandae!
        </p>

        <div className="space-x-2 md:space-x-5 pt-5 w-full flex items-center justify-center">
          <Link
            to="resumeSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <span
              className={`${buttonSecondary} md:text-xl font-medium flex justify-center items-center`}
            >
              My Resume &nbsp;
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
              className={`${buttonPrimary} md:text-xl font-medium flex justify-center items-center`}
            >
              Contact Me &nbsp;
              <span className="fa-solid fa-phone"></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
