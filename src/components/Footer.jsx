import React from "react";
import { buttonPrimary, buttonSecondary } from "../utils/StyleUtils";

export default function Footer() {
  return (
    <div className="px-3 py-10  bg-opacity-10 ">
      <div className="text-center space-y-2">
        <p className="text-2xl font-bold ">DR. SUMAN DHAMALA</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolor.
        </p>
        <div className="flex items-center justify-center gap-5 h-full p-2">
          <i
            className={`bg-primary hover:bg-black hover:text-[#e1d816] cursor-pointer transition-all duration-300 ease-in-out w-10 h-10  rounded-full flex justify-center items-center fa-brands fa-instagram `}
          ></i>
          <i
            className={`bg-primary hover:bg-black cursor-pointer hover:text-[#e1d816]  transition-all duration-300 ease-in-out w-10 h-10  rounded-full flex justify-center items-center fa-brands fa-facebook `}
          ></i>
          <i
            className={`bg-primary hover:bg-black cursor-pointer transition-all duration-300 ease-in-out w-10 h-10  rounded-full flex justify-center items-center fa-brands hover:text-[#e1d816] fa-youtube `}
          ></i>
          <i
            className={`bg-primary hover:bg-black cursor-pointer transition-all duration-300 ease-in-out w-10 h-10  rounded-full flex justify-center items-center fa-brands hover:text-[#e1d816]  fa-x-twitter `}
          ></i>
          <i
            className={`bg-primary hover:bg-black cursor-pointer transition-all duration-300 ease-in-out w-10 h-10   rounded-full flex justify-center items-center fa-brands  hover:text-[#e1d816] fa-linkedin-in `}
          ></i>
        </div>
        <p>&#169; {new Date().getFullYear()} | All rights reserved.</p>
        <p className="text-sm text-slate-700">
          Design & Developed by <span className="font-bold">Niraj Pahadi</span>
        </p>
      </div>
    </div>
  );
}
