"use client";

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components";
import { socials } from "../constants/index";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="paddings py-8 relative"
    >
      <div className="footer-gradient" />
      <div className="flex flex-col gap-8 innerWidth mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <h4 className="md:text-[64px] text-[44px] text-white font-bold">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="py-4 px-6 flex items-center justify-center h-fit bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img
              src="headSet.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="text-white font-normal text-[16px]">
              ENTER METAVERSE
            </span>
          </button>
        </div>
        <div className=" flex flex-col">
          <div className="h-[2px] mb-[50px] bg-white opacity-10" />
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <h4 className="text-[24px] font-extrabold text-white">METAVERUS</h4>
            <p className="text-[14px] font-normal opacity-50 text-white">
              Copyright © 2023 - 2024 Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
