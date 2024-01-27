"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";

const ExploreCard = ({ id, imgUrl, title, index, active, handelClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active == id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex justify-center items-center min-w-[170px] h-[700px] transition-all duration-[1s] ease-out-flex cursor-pointer
    `}
      onClick={() => handelClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className=" w-full h-full absolute rounded-[24px] object-cover"
      />
      {active != id ? (
        <h3 className=" font-semibold lg:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]  ">
          {title}
        </h3>
      ) : (
        <div className=" absolute bottom-0 p-8 rounded-b-[24px] flex-col flex max-h-full  w-full justify-start">
          <div className=" flexCenter w-[60px] h-[60px] rounded-[24px] mb-[16px] glassmorphism">
            <img
              src="/headset.svg"
              alt="headdet"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className=" font-normal text-[16px] leading-[20px] text-white uppercase">
            ENTER METAVERSE
          </p>
          <h2 className=" mt-[24px] text-[24px] lg:text-[32px] font-semibold text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
