"use client";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    >
      <div className=" absolute w-[50%] inset-0 gradient-01" />
      <div className=" innerWidth mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          width={25}
          height={25}
          alt="search icon"
          className=" object-contain"
        />
        <h1 className=" font-extrabold text-[24px] leading-[30px] text-white">
          Metaversus
        </h1>
        <Image
          src="/menu.svg"
          height={25}
          width={25}
          className=" object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
