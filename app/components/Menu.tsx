"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 right-4 z-50 flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded text-2xl"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-16 right-24 w-48 rounded-lg shadow-lg p-4 bg-black "
            >
              <ul className="space-y-2 text-xl">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/journeyOne">First Journey</a>
                </li>
                <li>
                  <a href="/journeyTwo">Second Journey</a>
                </li>
                <li>
                  <a href="/journeyThree">Third Journey</a>
                </li>
                <li>
                  <a href="/journeyFour">Fourth Journey</a>
                </li>
                <li>
                  <a href="/journeyFive">Fifth Journey</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
