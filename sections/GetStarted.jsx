"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText, StartSteps } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants/index";
const GetStarted = () => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="  flex md:flex-row flex-col innerWidth mx-auto gap-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flexCenter flex-1"
        >
          <img
            src="/get-started.png"
            alt="get_started-image"
            className="object-contain w-[80%] h-[80%]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex flex-col flex-[0.75] justify-center"
        >
          <TypingText title="| How Metaverus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className=" mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default GetStarted;
