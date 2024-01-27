"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText, NewFeatures } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { newFeatures } from "../constants/index";

const WhatsNew = () => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" flex flex-col flex-[0.75] justify-center"
        >
          <TypingText title="| Whats New?" />
          <TitleText
            textStyle={`md:text-[60px]`}
            title={<>What's new about Metaversus?</>}
          />
          <div className=" mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature, index) => (
              <NewFeatures key={index} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className="flexCenter flex-1"
        >
          <img
            src="/whats-new.png"
            alt="whats-new-image"
            className="object-contain w-[80%] h-[80%]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
