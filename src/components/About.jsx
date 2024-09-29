import React from "react";
import {
  boxShadowOptional,
  boxShadowPrimary,
  boxShadowSecondary,
  buttonPrimary,
  buttonSecondary,
  headingPrimary,
  titlePrimary,
} from "../utils/StyleUtils";
import avatar from "../assets/images/avatar.jpg";
import { serviceList } from "../assets/dummyData/dummyData";

export default function About() {
  return (
    <div className={`px-3 py-10 md:p-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm  space-y-10`}>
          <div className="border-l-4 border-primary pl-2">
            <p className="">WHO I AM</p>
            <p className={titlePrimary}>ABOUT ME</p>
          </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-7/12 space-y-10 flex flex-col">

          <div className="space-y-5">
            <p className={headingPrimary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              quibusdam dolore repellat earum sint dolorem repellendus magni,
              nam vel libero vitae a eum commodi minus, provident rerum quo qui?
              Nobis iure, reiciendis doloribus quibusdam odit ullam expedita
              libero? Eum ratione totam odit aperiam temporibus esse veniam!
              Inventore ullam ea eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              debitis facere, fugiat vitae quaerat corporis neque placeat
              exercitationem quis nulla.
            </p>
          </div>
        </div>

        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-3xl md:w-5/12 flex flex-col md:flex-row rounded-xl overflow-hidden md:py-5 pt-5 px-5 md:px-0 md:pl-5">
          <img
            className="rounded-md h-400 w-full"
            src={avatar}
            alt="My Avatar"
          />
          <div className="flex md:flex-col items-center justify-center gap-5 h-full p-5">
            <i
              className={`bg-primary transition-all duration-300 ease-in-out w-10 h-10 border rounded-full flex justify-center items-center fa-brands fa-instagram ${buttonPrimary}`}
            ></i>
            <i
              className={`bg-primary transition-all duration-300 ease-in-out w-10 h-10 border rounded-full flex justify-center items-center fa-brands fa-facebook ${buttonPrimary}`}
            ></i>
            <i
              className={`bg-primary transition-all duration-300 ease-in-out w-10 h-10 border rounded-full flex justify-center items-center fa-brands fa-youtube ${buttonPrimary}`}
            ></i>
            <i
              className={`bg-primary transition-all duration-300 ease-in-out w-10 h-10 border rounded-full flex justify-center items-center fa-brands fa-x-twitter ${buttonPrimary}`}
            ></i>
            <i
              className={`bg-primary transition-all duration-300 ease-in-out w-10 h-10 border rounded-full flex justify-center items-center fa-brands fa-linkedin-in ${buttonPrimary}`}
            ></i>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <p className={`text-center ${headingPrimary}`}>WHAT I DO FOR YOU?</p>
        <hr />
        <div className="flex flex-col md:flex-row gap-5">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-3xl p-5 rounded-xl flex flex-col items-center justify-center text-center gap-5"
            >
              <p className="text-2xl font-bold text-primary">{service.title}</p>
              <span className={`${service.imageUrl} text-6xl`}></span>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
