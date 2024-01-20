import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavStore } from "../store/navStore";

export default function FadeIn({ children }) {
  //using nav store
  //   const fadeOut = useNavStore((state) => state.fadeOut);

  //   console.log(fadeOut);

  return (
    // <AnimatePresence>
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1, x: 0 }}
    // transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
    >
      {/* <div className={`fadeIn ${fadeOut ? "fadeout" : null}`}> */}
      <div className={`fadeIn`}>{children}</div>
    </motion.div>
    //  </AnimatePresence>
  );
}
