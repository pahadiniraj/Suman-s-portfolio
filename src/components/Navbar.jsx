import React, { useState } from "react";
import DarkModeToggler from "./DarkModeToggler";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/state";

const NavbarLink = ({ to, darkMode, children, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-50}
    duration={500}
    className="cursor-pointer"
    activeClass={darkMode ? "text-primary" : "text-blue-700"}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const darkMode = useSelector((state) => state.darkMode);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const { showPageLoaderAction } = bindActionCreators(actionCreators, dispatch);

  const navLinks = [
    { to: "homeSection", label: "Home" },
    { to: "aboutSection", label: "About" },
    { to: "resumeSection", label: "Resume" },
    { to: "contactSection", label: "Contact" },
  ];

  return (
    <nav className="px-3 py-4 md:px-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm fixed top-0 w-full z-10">
      <div className="flex items-center">
        <NavLink to="/">
          <p
            className={`text-2xl font-bold ${
              darkMode ? "text-primary" : "text-blue-700"
            }`}
          >
            Dr. Suman Dhamala
          </p>
        </NavLink>

        <div className=" md:flex md:gap-8 ms-auto justify-center items-center font-semibold">
          {navLinks.map(({ to, label }) => (
            <NavbarLink key={to} to={to} darkMode={darkMode}>
              <p className="hidden md:block">{label}</p>
            </NavbarLink>
          ))}
          <NavLink to="/blog-home">
            <span
              className="cursor-pointer hidden md:block"
              onClick={() => showPageLoaderAction(true)}
            >
              Blog
            </span>
          </NavLink>
          <div className="flex items-center ms-auto ">
            <DarkModeToggler className=" text-2xl" />
            <span
              className={`fa-solid md:hidden  ${
                isMenuToggled ? "fa-xmark" : "fa-bars"
              } text-2xl ml-2 cursor-pointer   ${
                darkMode ? " text-primary" : "text-blue-700"
              }`}
              onClick={() => setIsMenuToggled((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {isMenuToggled && (
        <div className="md:hidden  flex flex-col gap-3 text-center p-5">
          {navLinks.map(({ to, label }) => (
            <NavbarLink key={to} to={to} darkMode={darkMode}>
              {label}
            </NavbarLink>
          ))}
          <NavLink to="/blog-home">
            <span
              className="cursor-pointer"
              onClick={() => showPageLoaderAction(true)}
            >
              Blog
            </span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
