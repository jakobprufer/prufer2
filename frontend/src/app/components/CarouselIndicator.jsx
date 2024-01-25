"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavStore } from "../store/navStore";
import { useTitleBarStore } from "../store/titleBarStore";
import { UseWindowSize } from "../functional/UseWindowSize.jsx";

const CarouselIndicator = ({ totalCards }) => {
  //using nav store
  const activeCardId = useNavStore((state) => state.activeCardId);
  const background = useTitleBarStore((state) => state.background);

  const dots = Array.from({ length: totalCards }, (_, index) => index);

  //dot click handler
  const windowSize = UseWindowSize();

  const handleDotClick = (index) => {
    // Use smooth scrolling
    snapScrollCont.scrollTo({
      top: index * windowSize.height,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={`carouselIndicator ${background}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {dots.map((index) => (
        <motion.div
          layout
          key={index}
          className={`dot button`}
          onClick={() => handleDotClick(index)} // Add onClick handler
        >
          {index === activeCardId ? (
            <motion.div layoutId="dotFill" className="dotFill"></motion.div>
          ) : null}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CarouselIndicator;
