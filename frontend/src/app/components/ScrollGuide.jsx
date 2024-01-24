"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowDownLine } from "react-icons/ri";
import { useWindowSize } from "../functional/UseWindowSize";

export default function ScrollGuide({ scrollY }) {
  //hiding scrollBar functionality
  const [showScrollGuide, setShowScrollGuide] = useState(false);

  useEffect(() => {
    if (scrollY < 100) {
      setShowScrollGuide(true);
    } else {
      setTimeout(() => {
        setShowScrollGuide(false);
      }, 1);
    }
  }, [scrollY]);

  //scroll functionality
  const windowSize = useWindowSize();

  const scrollToNextSection = () => {
    const snapScrollCont = document.querySelector(".snapScrollCont");

    if (snapScrollCont) {
      const nextSectionTop = snapScrollCont.scrollTop + windowSize.height;
      snapScrollCont.scrollTo({
        top: nextSectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="scrollGuideContainer">
      <AnimatePresence>
        {showScrollGuide ? (
          <motion.div
            onClick={scrollToNextSection}
            className="scrollGuide container l2 dark button"
            initial={{ y: 160 }}
            animate={{ y: 0, position: "fixed" }}
            exit={{ y: 160 }}
            transition={{
              y: {
                duration: 0.3,
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
              },
            }}
          >
            <RiArrowDownLine className="riIconInline" />
            <div>Scroll down for projects</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
