import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

export default function PortfolioManagement() {
  const onHoverNavLink = "hover:bg-primary hover:text-custom-light-high";
  const [showPopup, setShowPopup] = useState(false);
  const dashboardTitle = useSelector((state) => state.dashboardTitle);

  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.title = 'Portfolio Manager';
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="flex h-screen">
      <div className="w-2/12 relative bg-custom-dark space-y-5">
        <p className="text-center text-xl font-bold py-3 px-2 text-primary">
          Poftfolio Manager
        </p>
        <div className="flex flex-col font-medium text-custom-light-high">
          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/dashboard"}
          >
            <i className="fa-solid fa-chart-line w-8"></i>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/info"}
          >
            <i className="fa-solid fa-circle-info w-8"></i>
            <span>Info</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/home"}
          >
            <i className="fa-solid fa-house w-8"></i>
            <span>Home</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/about"}
          >
            <i className="fa-solid fa-table-columns w-8"></i>
            <span>About</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/resume"}
          >
            <i className="fa-solid fa-file w-8"></i>
            <span>Resume</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/contact"}
          >
            <i className="fa-solid fa-phone w-8"></i>
            <span>Contact</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/blog"}
          >
            <i className="fa-regular fa-newspaper w-8"></i>
            <span>Blog</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/messages"}
          >
            <i className="fa-solid fa-message w-8"></i>
            <span>Messages</span>
          </NavLink>

          <NavLink
            className={`py-3 px-5 ${onHoverNavLink}`}
            to={"/portfolio-management/management/reports"}
          >
            <i className="fa-solid fa-note-sticky w-8"></i>
            <span>Reports</span>
          </NavLink>
        </div>
        <button className="py-3 px-5 bg-primary absolute bottom-0 w-full font-medium text-custom-light-high hover:text-custom-light-low">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>&nbsp;Logout</span>
        </button>
      </div>

      <div className="w-10/12 flex flex-col">
        <div className="px-2 py-3 bg-primary flex">
          <p className="text-xl text-custom-light-high font-medium">
            <i className="fa-solid fa-gear w-8"></i>{dashboardTitle}
          </p>
          <div className="ms-auto me-0 relative">
            <i
              className=" border fa-solid fa-user w-8 h-8 rounded-full flex items-center justify-center bg-custom-light-high text-primary cursor-pointer hover:bg-custom-light-low"
              onClick={() => setShowPopup((prevState) => !prevState)}
            ></i>
            {showPopup && (
              <div
                ref={popupRef}
                className="z-10 absolute right-0 mt-2 w-40 text-sm p-3 rounded-xl bg-custom-dark bg-opacity-80 backdrop-blur-sm text-center text-custom-light-high space-y-2"
              >
                <p className={`${onHoverNavLink} p-1 rounded cursor-pointer`}>
                  Admin Setup
                </p>
                <p className={`${onHoverNavLink} p-1 rounded cursor-pointer`}>
                  Change Password
                </p>
                <p className={`${onHoverNavLink} p-1 rounded cursor-pointer`}>
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="p-5 flex-grow overflow-y-auto relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
