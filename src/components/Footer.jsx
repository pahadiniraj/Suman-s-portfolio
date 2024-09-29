import React from "react";
import { buttonPrimary, buttonSecondary } from "../utils/StyleUtils";

export default function Footer() {
  return (
    <div className="px-3 py-10 bg-primary text-custom-light-high">
      <div className="text-center space-y-2">
        <p className="text-2xl font-bold ">DR. SUMAN DHAMALA</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolor.
        </p>
        <div className="flex items-center justify-center gap-5 h-full p-2">
          <i
            className={`bg-primary hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-10 h-10 border border-custom-light-high hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-instagram `}
          ></i>
          <i
            className={`bg-primary hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-10 h-10 border border-custom-light-high hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-facebook `}
          ></i>
          <i
            className={`bg-primary hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-10 h-10 border border-custom-light-high hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-youtube `}
          ></i>
          <i
            className={`bg-primary hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-10 h-10 border border-custom-light-high hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-x-twitter `}
          ></i>
          <i
            className={`bg-primary hover:text-custom-light-low cursor-pointer transition-all duration-300 ease-in-out w-10 h-10 border border-custom-light-high hover:border-custom-light-low rounded-full flex justify-center items-center fa-brands fa-linkedin-in `}
          ></i>
        </div>
        <p>&#169; {new Date().getFullYear()} | All rights reserved.</p>
        <p className="text-sm text-custom-light-low">Design & Developed by <span className="font-bold">SagarDaDa</span></p>
      </div>
    </div>
  );
}
