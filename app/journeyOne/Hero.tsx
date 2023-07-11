"use client";

import React, { useState } from "react";
import "./styles.css";
import Menu from "../components/Menu";
import DetailsBox from "../components/DetailsBox";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Hero: React.FC<Props> = (props: Props) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="relative">
      <h1 className="text-center text-5xl font-bold mt-10 text-black underline underline-offset-4">
        Israel's Freedom from Egypt
      </h1>
      <Menu />
      <div className="flex justify-around items-center gap-10 my-10">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="detailsBox1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <DetailsBox className="top-8 left-8 w-96 h-64 bg-transparent/50" />
            </motion.div>
          )}
        </AnimatePresence>
        {step === 1 && (
          <>
            <p onClick={handleNext} className="cursor-pointer">
              Next
            </p>
          </>
        )}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              key="detailsBox2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <DetailsBox className="top-32 left-[460px] w-96 h-64 bg-transparent/50" />
            </motion.div>
          )}
        </AnimatePresence>
        {step === 2 && (
          <>
            <p onClick={handleNext} className="cursor-pointer">
              Next
            </p>
          </>
        )}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              key="detailsBox3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <DetailsBox className="top-8 right-64 w-96 h-64 bg-transparent/50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
