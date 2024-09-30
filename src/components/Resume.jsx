import React, { useState } from "react";
import { titlePrimary } from "../utils/StyleUtils";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between children animations
      },
    },
  };

  const childVariants1 = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }, // Animate to on-screen
  };

  const childVariants2 = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }, // Animate to on-screen
  };

  const [onEnter, setOnEnter] = useState(false);
  const [onEnterDo, setOnEnterDo] = useState(false);

  const handleScrollTrigger1 = ({ progress }) => {
    if (progress >= 0.5) {
      setOnEnter(true); // Trigger animation when 90% is visible
    }
  };
  const handleScrollTrigger2 = ({ progress }) => {
    if (progress >= 0.2) {
      setOnEnterDo(true); // Trigger animation when 90% is visible
    }
  };

  return (
    <div className="px-3 py-10 md:p-20 space-y-10">
      <ScrollTrigger onProgress={handleScrollTrigger1}>
        <motion.div
          className="border-l-4 border-primary pl-2"
          initial={{ opacity: 0, y: 50 }}
          animate={onEnter && { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="">MY EDUCATION AND EXPERIENCES</p>
          <p className={titlePrimary}>RESUME</p>
        </motion.div>
      </ScrollTrigger>
      <ScrollTrigger onProgress={handleScrollTrigger2}>
        <div className="flex flex-col md:flex-row gap-5">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={onEnterDo && "visible"}
            className="w-full rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 pb-2"
          >
            <motion.p
              className="bg-custom-primary p-3 text-2xl font-bold text-center text-black"
              initial={{ opacity: 0, x: -1000 }}
              animate={onEnterDo && { opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              Education
            </motion.p>

            <motion.div
              variants={childVariants1}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 p-5  bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div>
                <i className="fa-solid fa-graduation-cap w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black"></i>
              </div>
              <div className="">
                <p className="font-bold">2018-2023</p>
                <p className="text-xl font-bold text-primary">
                  Bachelor's Degree in Lorem ipsum
                </p>
                <p className="text-lg font-bold">Lorem University</p>
                <p className="font-medium">Lorem City, USA</p>
              </div>
            </motion.div>

            <motion.div
              variants={childVariants1}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 p-5  bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div>
                <i className="fa-solid fa-graduation-cap w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black"></i>
              </div>
              <div className="">
                <p className="font-bold">2020-2022</p>
                <p className="text-xl font-bold text-primary">
                  Master's Degree in Lorem
                </p>
                <p className="text-lg font-bold">Lorem University</p>
                <p className="font-medium">Lorem City, USA</p>
              </div>
            </motion.div>

            <motion.div
              variants={childVariants1}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 p-5  bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div>
                <i className="fa-solid fa-graduation-cap w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black"></i>
              </div>
              <div className="">
                <p className="font-bold">2014-2019</p>
                <p className="text-xl font-bold text-primary">
                  Bachelor's Degree in Lorem ipsum dolor
                </p>
                <p className="text-lg font-bold">Lorem University</p>
                <p className="font-medium">Lorem City, USA</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={onEnterDo && "visible"}
            className="w-full rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 pb-2"
          >
            <motion.p
              initial={{ opacity: 0, x: 1000 }}
              animate={onEnterDo && { opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-custom-primary p-3 text-2xl font-bold text-center text-black"
            >
              Experiences
            </motion.p>

            <motion.div
              variants={childVariants2}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 p-5  bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div>
                <i className="fa-solid fa-briefcase w-10 h-10 rounded-full bg-custom-primary flex items-center justify-center text-black"></i>
              </div>
              <div className="">
                <p className="font-bold">2018-2023</p>
                <p className="text-xl font-bold text-primary">
                  Senior Lorem ipsum
                </p>
                <p className="text-lg font-bold">Lorem Inc.</p>
                <p className="font-medium">Lorem City, USA</p>
              </div>
            </motion.div>

            <motion.div
              variants={childVariants2}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 p-5  bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div>
                <i className="fa-solid fa-briefcase w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black"></i>
              </div>
              <div className="">
                <p className="font-bold">2020-2022</p>
                <p className="text-xl font-bold text-primary">
                  Junior Lorem ipsum
                </p>
                <p className="text-lg font-bold">Lorem Inc.</p>
                <p className="font-medium">Lorem City, USA</p>
              </div>
            </motion.div>

            <motion.div
              variants={childVariants2}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 p-5  bg-gray-300 bg-opacity-10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              <div>
                <i className="fa-solid fa-briefcase w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black"></i>
              </div>
              <div className="">
                <p className="font-bold">2014-2019</p>
                <p className="text-xl font-bold text-primary">
                  Intern Lorem ipsum
                </p>
                <p className="text-lg font-bold">Lorem Inc.</p>
                <p className="font-medium">Lorem City, USA</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ScrollTrigger>
    </div>
  );
}
