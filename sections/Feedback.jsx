"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => {
  return (
    <section className=" paddings" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="  flex flex-col lg:flex-row  mx-auto gap-6"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" lg:max-w[370px] flex justify-end flex-col flex-[0.4] sm:p-10
         p-4  rounded-[32px] gradient-05 border border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className=" font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Samantha
            </h4>
            <p className=" sm:text-[18px] text-[12px] mt-[8px] sm:leading-[22px] leading-[16px] text-white">
              Founder | Metaverus
            </p>
            <p className=" sm:text-[24px] text-[24px] mt-[18px] sm:leading-[45px] leading-[39px] text-white">
              “With the development of today's technology, metaverse is very
              useful for today's work, or can be called web 3.0. by using
              metaverse you can use it as anything”
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-1 relative justify-center items-center"
        >
          <img
            src="/planet-09.png"
            alt="planet"
            className="w-full lg:h-[610px] min-h-[210px] h-auto rounded-[40px] object-cover"
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[10%]"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className=" w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
