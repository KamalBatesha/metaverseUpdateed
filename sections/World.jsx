"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
const World = () => {
  return (
    <section className=" paddings" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="  flex flex-col innerWidth mx-auto"
      >
        <TypingText title="| People on the World" textStyle="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyle="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mt-[68px] sm:h-[550px] h-[190px] w-full relative flex"
        >
          <img
            src="/map.png"
            alt="world map"
            className=" w-full h-full object-contain"
          />
          <div className=" absolute sm:right-24  sm:bottom-24 sm:w-[70px] sm:h-[70px]  right-[10%]  bottom-[15%] w-[30px] h-[30px] p-[2px] sm:p-[6px] bg-[#5d6680] rounded-full">
            <div className=" relative w-full h-full">
              <img
                src="/people-01.png"
                alt="people"
                className=" absolute w-full h-full z-10"
              />
              <div className="z-0 absolute rounded-full w-[40%] h-[100%]  bg-[#5d6680] sm:-bottom-[25%] -bottom-[20%] left-[50%] -translate-x-[50%]" />
            </div>
          </div>
          <div className=" absolute sm:top-8  sm:left-36 sm:w-[70px] sm:h-[70px]  top-[15%]  left-[10%] w-[30px] h-[30px] p-[2px] sm:p-[6px] bg-[#5d6680] rounded-full">
            <div className=" relative w-full h-full">
              <img
                src="/people-02.png"
                alt="people"
                className=" absolute z-10 w-full h-full"
              />
              <div className="z-0 absolute rounded-full w-[40%] h-[100%]  bg-[#5d6680] sm:-bottom-[25%] -bottom-[20%] left-[50%] -translate-x-[50%]" />
            </div>
          </div>
          <div className=" absolute sm:left-[45%]  sm:top-[40%] sm:w-[70px] sm:h-[70px]  left-[45%]  top-[40%] w-[30px] h-[30px] p-[2px] sm:p-[6px] bg-[#5d6680] rounded-full">
            <div className=" relative w-full h-full">
              <img
                src="/people-03.png"
                alt="people"
                className=" absolute z-10 w-full h-full"
              />
              <div className="z-0 absolute rounded-full w-[40%] h-[100%]  bg-[#5d6680] sm:-bottom-[25%] -bottom-[20%] left-[50%] -translate-x-[50%]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default World;
