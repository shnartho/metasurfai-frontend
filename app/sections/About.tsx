"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import Link from "next/link";


const About = () => (
  <section id="about" className="paddings relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      <TypingText title="| About MetaSurfAI" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">MetaSurfAI</span> is transforming advertising through decentralization. MetaSurfAI guarantees real user engagement, where users receive cryptocurrency as a reward for each advertisement viewed. The audience can also reuse their own cryptocurrency to publish ads or store it as an asset. Companies, small businesses, or individuals wanting real audience interaction can publish ads anonymously here, unlike platforms like YouTube or social media, where ads often blend in with content and go unnoticed.
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
        <Link href="#explore" scroll={false}>
          <Image
            src="/arrow-down.svg"
            width={18}
            height={28}
            alt="arrow down"
            className="object-contain mt-[28px]"
          />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
