"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";


const Footer = () => (

  <>
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="paddings py-8 relative"
    >
      <div className="footer-gradient" />
      <div className="innerWidth mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the MetaSurfAI
          </h4>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                <Image
                  key={social.name}
                  src={social.url}
                  width={40}
                  height={40}
                  alt={social.name}
                  className="object-contain cursor pointer" />
              </a>
            ))}
          </div>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#2561AB] rounded-[32px] gap-[12px]"
            style={{
              background: 'linear-gradient(to right, #f708a7, #d383f8)',
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = 'https://app.metasurfai.com'}
          >
            <Image
              src="/headset.svg"
              width={24}
              height={24}
              alt="headset"
              className="object-contain"
            />
            <span className="font-normal text-[16px] text-white uppercase">
              <a href="https://app.metasurfai.com" target="_blank" rel="noopener noreferrer" className="text-white">
                Launch APP
              </a>
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flexCenter flex-wrap gap-8">
            {/* <h4 className="font-extrabold text-[24px] text-white">MetaSurfAI</h4> */}
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © MetaSurfAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  </>
);

export default Footer;
