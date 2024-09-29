import React from "react";
import {
  boxShadowOptional,
  boxShadowPrimary,
  boxShadowSecondary,
  buttonOptional,
  buttonPrimary,
  buttonSecondary,
  titlePrimary,
  titleSecondary,
} from "../utils/StyleUtils";

export default function Contact() {
  return (
    <div className={`bg-gray-500 bg-opacity-10 backdrop-blur-sm px-3 py-10 md:p-20 space-y-10`}>
      <div className="border-l-4 border-primary pl-2">
        <p className="">CONNECT WITH ME</p>
        <p className={titlePrimary}>CONTACT ME</p>
      </div>

      <div
        className={`flex flex-col md:flex-row rounded-xl overflow-hidden ${boxShadowPrimary}`}
      >
        <div
          className={`md:w-5/12 bg-gray-300 bg-opacity-10 backdrop-blur-sm p-5 space-y-5 flex flex-col justify-center`}
        >
          <p className="text-2xl font-bold text-primary">DR. SUMAN DHAMALA</p>

          <div className={`flex gap-5 p-5 rounded-xl ${boxShadowSecondary}`}>
            <i className="fa-solid fa-phone text-primary"></i>
            <div>
              <p className="font-bold text-primary">PHONE:</p>
              <p>+1-234567890</p>
              <p>+1-9876543210</p>
            </div>
          </div>

          <div className={`flex gap-5 p-5 rounded-xl ${boxShadowSecondary}`}>
            <i className="fa-solid fa-envelope text-primary"></i>
            <div>
              <p className="font-bold text-primary">E-MAIL:</p>
              <p>john@example.com</p>
              <p>doe@example.com</p>
            </div>
          </div>

          <div className={`flex gap-5 p-5 rounded-xl ${boxShadowSecondary}`}>
            <i className="fa-solid fa-location-dot text-primary"></i>
            <div>
              <p className="font-bold text-primary">ADDRESS:</p>
              <p>123 Street, John Road</p>
              <p>LA</p>
              <p>USA</p>
            </div>
          </div>
        </div>

        <div className={`md:w-7/12 p-5 space-y-5 flex flex-col justify-center bg-primary text-custom-light-high`}>
          <p className="text-2xl font-bold">HOW CAN I HELP YOU?</p>
          <form className="space-y-5">
            <div className="space-y-1">
              <p className="font-medium">Name*</p>
              <input
                className="outline-none rounded-lg p-2 w-full focus:ring-2 ring-gray-300 text-custom-dark"
                name="name"
                type="text"
                required
              />
            </div>

            <div className="space-y-1">
              <p className="font-medium">E-mail*</p>
              <input
                className="outline-none rounded-lg p-2 w-full focus:ring-2 ring-gray-300 text-custom-dark"
                name="email"
                type="email"
                required
              />
            </div>

            <div className="space-y-1">
              <p className="font-medium">Message*</p>
              <textarea
                className="outline-none rounded-lg p-2 w-full focus:ring-2 ring-gray-300 text-custom-dark"
                name="message"
                type="text"
                required
                rows={5}
              />
            </div>

            <div className="flex justify-center items-center">
              <button className={`${buttonOptional} w-44`}>
                <i className={`fa-solid fa-paper-plane`}></i>&nbsp; Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
