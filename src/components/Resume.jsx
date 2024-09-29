import React from "react";
import { titlePrimary } from "../utils/StyleUtils";

export default function Resume() {
  return (
    <div className="px-3 py-10 md:p-20 space-y-10">
      <div className="border-l-4 border-primary pl-2">
        <p className="">MY EDUCTION AND EXPERIENCES</p>
        <p className={titlePrimary}>RESUME</p>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 pb-2">
          <p className="bg-primary p-3 text-xl font-bold text-center text-custom-light-high">
            Education
          </p>

          <div className="flex items-center gap-5 p-5 mx-2 rounded-lg bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div>
              <i className="fa-solid fa-graduation-cap w-10 h-10 rounded-full bg-primary flex items-center justify-center text-custom-light-high"></i>
            </div>
            <div className="">
              <p className="font-bold">2018-2023</p>
              <p className="text-xl font-bold text-primary">
                Bachelor's Degree in Lorem ipsum dolor sit amet
              </p>
              <p className="text-lg font-bold">Lorem University</p>
              <p className="font-medium">Lorem City, USA</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-5 mx-2 rounded-lg bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div>
              <i className="fa-solid fa-graduation-cap w-10 h-10 rounded-full bg-primary flex items-center justify-center text-custom-light-high"></i>
            </div>
            <div className="">
              <p className="font-bold">2020-2022</p>
              <p className="text-xl font-bold text-primary">
                Master's Degree in Lorem ipsum dolor sit amet
              </p>
              <p className="text-lg font-bold">Lorem University</p>
              <p className="font-medium">Lorem City, USA</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-5 mx-2 rounded-lg bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div>
              <i className="fa-solid fa-graduation-cap w-10 h-10 rounded-full bg-primary flex items-center justify-center text-custom-light-high"></i>
            </div>
            <div className="">
              <p className="font-bold">2014-2019</p>
              <p className="text-xl font-bold text-primary">
                Bachelor's Degree in Lorem ipsum dolor sit amet
              </p>
              <p className="text-lg font-bold">Lorem University</p>
              <p className="font-medium">Lorem City, USA</p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 pb-2">
          <p className="bg-primary p-3 text-xl font-bold text-center text-custom-light-high">
            Experiences
          </p>

          <div className="flex items-center gap-5 p-5 mx-2 rounded-lg bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div>
              <i className="fa-solid fa-briefcase w-10 h-10 rounded-full bg-primary flex items-center justify-center text-custom-light-high"></i>
            </div>
            <div className="">
              <p className="font-bold">2018-2023</p>
              <p className="text-xl font-bold text-primary">
                Senior Lorem ipsum
              </p>
              <p className="text-lg font-bold">Lorem Inc.</p>
              <p className="font-medium">Lorem City, USA</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-5 mx-2 rounded-lg bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div>
              <i className="fa-solid fa-briefcase w-10 h-10 rounded-full bg-primary flex items-center justify-center text-custom-light-high"></i>
            </div>
            <div className="">
              <p className="font-bold">2020-2022</p>
              <p className="text-xl font-bold text-primary">
                Junior Lorem ipsum
              </p>
              <p className="text-lg font-bold">Lorem Inc.</p>
              <p className="font-medium">Lorem City, USA</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-5 mx-2 rounded-lg bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div>
              <i className="fa-solid fa-briefcase w-10 h-10 rounded-full bg-primary flex items-center justify-center text-custom-light-high"></i>
            </div>
            <div className="">
              <p className="font-bold">2014-2019</p>
              <p className="text-xl font-bold text-primary">
                Lorem ipsum
              </p>
              <p className="text-lg font-bold">Lorem Inc.</p>
              <p className="font-medium">Lorem City, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
