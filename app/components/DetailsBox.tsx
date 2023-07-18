"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Slide = {
  heading: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
};

type Props = {};

const slides: Slide[] = [
  {
    heading: "Heading1",
    para1: "para1",
    para2: "para2",
    para3: "para3",
    para4: "para4",
  },
  {
    heading: "Heading2",
    para1: "para1",
    para2: "para2",
    para3: "para3",
    para4: "para4",
  },
  {
    heading: "Heading3",
    para1: "para1",
    para2: "para2",
    para3: "para3",
    para4: "para4",
  },
  {
    heading: "Heading4",
    para1: "para1",
    para2: "para2",
    para3: "para3",
    para4: "para4",
  },
];

const DetailsBox: React.FC<Props> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0); // Start from the beginning
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1); // Go to the next slide
    }
  };

  return (
    <div className="p-4 md:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col gap-4 bg-transparent/40 text-black p-4 rounded-lg"
      >
        <h1 className="text-xl font-semibold text-center">
          {slides[currentSlide].heading}
        </h1>
        <p>{slides[currentSlide].para1}</p>
        <p>{slides[currentSlide].para2}</p>
        <p>{slides[currentSlide].para3}</p>
        <p>{slides[currentSlide].para4}</p>
        <button
          className="text-white p-4 font-semibold rounded-lg bg-transparent/40 self-end"
          onClick={handleNextSlide}
        >
          Next
        </button>
      </motion.div>
    </div>
  );
};

export default DetailsBox;
