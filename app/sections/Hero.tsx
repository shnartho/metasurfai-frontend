"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="yPaddings sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <div className="flexCenter flex-col relative z-10">
  <motion.h1 variants={textVariant(1.1)} className="heroHeading">
    <span className="gradient-text">Decentralized</span>
    <br />
    <span className="gradient-text">Advertisement</span>
    <br />
    <span className="gradient-text">Platform🚀</span>
  </motion.h1>
</div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src="/cover.png"
          width={1000}
          height={1000}
          alt="cover"
          priority={true}
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
