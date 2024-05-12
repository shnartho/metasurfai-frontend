"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    const sectionId = selectedValue.toLowerCase();
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="xPaddings py-8 relative"
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="innerWidth mx-auto flex justify-between gap-8">
          <div className="relative">
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="appearance-none bg-[#2561AB] rounded-[32px] text-white pl-6 pr-12 py-4 cursor-pointer"
              style={{ backgroundImage: 'linear-gradient(to right, #f708a7, #d383f8)', height: '56px' }}
            >
              <option value="" disabled hidden>LEARN MORE</option>
              <option value="about" className="option">Introduction</option>
              <option value="explore" className="option">Roadmap</option>
              <option value="whatsnew" className="option">What&#39;s New</option>
              <option value="insight" className="option">Insight</option>
              <option value="getstarted" className="option">Get Started</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>


          {/* 2nd element */}
          <div className="flex items-center justify-center"> {/* Container for centering */}
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
              MetaSurfAI
            </h2>
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
      </motion.nav>
    </header>
  )
};

export default Navbar;
