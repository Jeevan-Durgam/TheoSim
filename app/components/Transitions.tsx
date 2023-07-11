"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Points from "./Points";

interface HeroProps {}

const Transitions: React.FC<HeroProps> = () => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const handlePointClick = (pointId: number) => {
    setSelectedPoint(pointId);
  };

  return (
    <div className="relative">
      <Points />
      <div className="relative z-20">
        {/* Point of contact buttons */}
        <div className="flex justify-center mt-8">
          <div className="flex">
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

        {/* Popup */}
        <AnimatePresence>
          {selectedPoint && (
            <motion.div
              key="popup"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 flex items-center justify-center h-70vh bg-white rounded-lg shadow-lg px-6 py-4 mt-8 mx-4"
            >
              {/* Popup content */}
              <p className="text-xl">Popup content for Point {selectedPoint}</p>
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
  return (
    <div className="relative">
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md cursor-pointer ${
          isSelected ? "bg-yellow-500" : ""
        }`}
        onClick={onClick}
      ></div>
      <div
        className={`absolute w-2 h-2 rounded-full top-1 left-1 ${
          isSelected ? "bg-yellow-500" : ""
        }`}
      ></div>
    </div>
  );
};

export default Transitions;
