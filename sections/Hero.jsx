"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className=" yPaddings sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="  flex flex-col"
      >
        <div className=" innerWidth mx-auto relative flex flex-col justify-center items-center z-10">
          <motion.h1 variants={textVariant(1.1)} className="heroHeading">
            Metaversus
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className=" heroHeading">Ma</h1>
            <div className="heroDText" />
            <h1 className=" heroHeading">Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className=" relative w-full -mt-[12px] md:-mt-[20px]"
        >
          <div className=" relative flex justify-end    rounded-tl-[140px] z-0 -top-[30px]   sm:h-[430px] h-[250px]   ">
            <div className="absolute inset-0 hero-gradient z-0 w-full h-full " />
            <img
              src="/cover.png"
              alt="cover image"
              className=" block  w-[80%] object-cover h-full relative rounded-tl-[140px] z-10"
            />
          </div>
          <a href="#explore">
            <div className=" w-full flex justify-end sm:-mt-[88px] -mt-[65px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp image"
                className=" sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
