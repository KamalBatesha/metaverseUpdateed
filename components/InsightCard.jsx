"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const InsightCard = ({ index, imgUrl, title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        alt="planet"
        className=" md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="flex  justify-between items-center w-full">
        <div className="flex md:ml-16 flex-1 flex-col   max-w-[650px]">
          <h3 className="lg:text-[42px] text-[26px] text-white font-normal ">
            {title}
          </h3>
          <p className="mt-[16px] lg:text-[20px] text-[14px] text-secondary-white font-normal">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden w-[100px] h-[100px] bg-transparent border rounded-full border-white items-center justify-center">
          <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%]" />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
