"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handlePointClick = (pointId: number) => {
    setSelectedPoint(pointId);
  };

  const handlePopupClose = () => {
    setSelectedPoint(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    // Render the previous code you sent
    return (
      <div className="relative">
        {/* Previous code here */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <video
              className="h-full w-full object-cover object-center absolute inset-0 z-[-1]"
              autoPlay
              muted
            >
              <source src="/videos/BibleAdventures.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-[1]">
            <div className="flex justify-center items-end h-screen pb-48">
              <div className="flex gap-24">
                <PointOfContact
                  onClick={() => handlePointClick(1)}
                  isSelected={selectedPoint === 1}
                />
                <PointOfContact
                  onClick={() => handlePointClick(2)}
                  isSelected={selectedPoint === 2}
                />
                <PointOfContact
                  onClick={() => handlePointClick(3)}
                  isSelected={selectedPoint === 3}
                />
                <PointOfContact
                  onClick={() => handlePointClick(4)}
                  isSelected={selectedPoint === 4}
                />
                <PointOfContact
                  onClick={() => handlePointClick(5)}
                  isSelected={selectedPoint === 5}
                />
                <PointOfContact
                  onClick={() => handlePointClick(6)}
                  isSelected={selectedPoint === 6}
                />
                <PointOfContact
                  onClick={() => handlePointClick(7)}
                  isSelected={selectedPoint === 7}
                />
              </div>
            </div>
            <AnimatePresence>
              {selectedPoint && (
                <motion.div
                  key="popup"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-0 left-0 right-0 flex items-center justify-center h-70vh bg-white rounded-lg shadow-lg px-6 py-4 mt-8 mx-4"
                >
                  <p className="text-xl text-black">
                    Popup content for Point {selectedPoint}
                  </p>
                  <button
                    className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePopupClose}
                  >
                    x
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-fill object-center absolute inset-0 z-[-1]"
          autoPlay
          muted
        >
          <source src="/videos/BibleAdventures.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-[1]">
        <div className="flex justify-center items-end h-screen pb-24">
          <div className="flex flex-col gap-4 md:gap-24">
            <PointOfContact
              onClick={() => handlePointClick(1)}
              isSelected={selectedPoint === 1}
            />
            <PointOfContact
              onClick={() => handlePointClick(2)}
              isSelected={selectedPoint === 2}
            />
            <PointOfContact
              onClick={() => handlePointClick(3)}
              isSelected={selectedPoint === 3}
            />
            <PointOfContact
              onClick={() => handlePointClick(4)}
              isSelected={selectedPoint === 4}
            />
            <PointOfContact
              onClick={() => handlePointClick(5)}
              isSelected={selectedPoint === 5}
            />
            <PointOfContact
              onClick={() => handlePointClick(6)}
              isSelected={selectedPoint === 6}
            />
            <PointOfContact
              onClick={() => handlePointClick(7)}
              isSelected={selectedPoint === 7}
            />
          </div>
        </div>
        <AnimatePresence>
          {selectedPoint && (
            <motion.div
              key="popup"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white"
            >
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="text-xl">
                  Popup content for Point {selectedPoint}
                </p>
                <button
                  className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
                  onClick={handlePopupClose}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface PointOfContactProps {
  onClick: () => void;
  isSelected: boolean;
}

const PointOfContact: React.FC<PointOfContactProps> = ({
  onClick,
  isSelected,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="relative">
      <img
        src="/pointer.png"
        alt="Point of Contact"
        className={`w-8 h-8 rounded-full shadow-md cursor-pointer`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Hero;
