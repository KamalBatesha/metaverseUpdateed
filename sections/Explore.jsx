"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, TitleText, ExploreCard } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
import { exploreWorlds } from "../constants/index";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className=" paddings" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="  flex flex-col innerWidth mx-auto"
      >
        <TypingText title="| The World" textStyle="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyle="text-center"
        />
        <div className=" mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-4">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              index={index}
              {...world}
              active={active}
              handelClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
