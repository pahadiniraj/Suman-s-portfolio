import React, { useState } from "react";
import {
  buttonPrimary,
  headingPrimary,
  titlePrimary,
} from "../utils/StyleUtils";
import avatar from "../assets/images/avatar.jpg";
import { serviceList } from "../assets/dummyData/dummyData";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";

export default function About() {
  const [onEnter, setOnEnter] = useState(false);
  const [onEnterDo, setOnEnterDo] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between children animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { opacity: 1, x: 0 }, 
  };

  const handleScrollTrigger1 = ({ progress }) => {
    if (progress >= 0.2) {
      setOnEnter(true); // Trigger animation when 90% is visible
    }
  };

  const handleScrollTrigger2 = ({ progress }) => {
    if (progress >= 0.2) {
      setOnEnterDo(true); // Trigger animation when 90% is visible
    }
  };

  return (
    <div
      className={`px-3 py-10 md:p-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm overflow-x-auto  space-y-10`}
    >
      <ScrollTrigger onProgress={handleScrollTrigger1}>
        <motion.div
          className="border-l-4 border-primary pl-2"
          initial={{ opacity: 0, y: 50 }}
          animate={onEnter && { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={onEnter && { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            WHO I AM
          </motion.p>
          <motion.p
            className={titlePrimary}
            initial={{ opacity: 0, y: 50 }}
            animate={onEnter && { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ABOUT ME
          </motion.p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-5">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={onEnter && { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-7/12 space-y-10 flex flex-col"
          >
            <div className="mt-5">
              <p className={headingPrimary}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, ipsa.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quibusdam dolore repellat earum sint dolorem
                repellendus magni, nam vel libero vitae a eum commodi minus,
                provident rerum quo qui? Nobis iure, reiciendis doloribus
                quibusdam odit ullam expedita libero? Eum ratione totam odit
                aperiam temporibus esse veniam! Inventore ullam ea eligendi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                debitis facere, fugiat vitae quaerat corporis neque placeat
                exercitationem quis nulla.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={onEnter && { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-3xl md:w-5/12 flex flex-col md:flex-row rounded-xl overflow-hidden md:py-5 pt-5 px-5 md:px-0 md:pl-5"
          >
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
          </motion.div>
        </div>
      </ScrollTrigger>
      <ScrollTrigger onProgress={handleScrollTrigger2}>
        <div className="space-y-5 ">
          <motion.p
            className={`text-center ${headingPrimary}`}
            initial={{ opacity: 0, x: 100 }}
            animate={onEnterDo && { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            WHAT I DO FOR YOU?
          </motion.p>
          <hr />
          <motion.div
            className="flex flex-col md:flex-row gap-5 overflow-hidden "
            variants={containerVariants}
            initial="hidden"
            animate={onEnterDo && "visible"} // Control animation on scroll enter
          >
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-3xl p-5 rounded-xl flex flex-col items-center justify-center text-center gap-5  overflow-hidden "
                variants={childVariants}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl font-bold text-primary">
                  {service.title}
                </p>
                <span className={`${service.imageUrl} text-6xl`}></span>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ScrollTrigger>
    </div>
  );
}
