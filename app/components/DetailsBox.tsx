"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Slide = {
  heading: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  img: string;
};

interface DetailsBoxProps {
  slides: Slide[];
}

const DetailsBox: React.FC<DetailsBoxProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="p-4 md:p-10 md:h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full bg-transparent/40 text-black p-4 rounded-lg"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-center">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-xl text-white/70">
              {slides[currentSlide].para1}
            </p>
            <p className="text-xl text-white/70">
              {slides[currentSlide].para2}
            </p>
            <p className="text-xl text-white/70">
              {slides[currentSlide].para3}
            </p>
            <p className="text-xl text-white/70">
              {slides[currentSlide].para4}
            </p>
          </div>
          <div className="max-w-7xl h-auto md:w-[1800px] md:h-[500px]">
            <img
              src={slides[currentSlide].img}
              alt="image"
              className="w-full h-full"
            />
          </div>
        </div>
        <button
          className="text-white p-4 font-semibold rounded-lg bg-transparent/40 mt-8"
          onClick={handleNextSlide}
        >
          Next
        </button>
      </motion.div>
    </div>
  );
};

export default DetailsBox;
