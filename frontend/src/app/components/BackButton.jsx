"use client";
import React from "react";
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function BackButton({ colour }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link
        className={`backButton button container l2 ${colour} iconSlide left`}
        href="/"
      >
        <div className="hoverShadow"></div>
        <div className="riIconInline">
          <RiArrowLeftLine className="before" />
          <RiArrowLeftLine className="main" />
        </div>
        <div className="buttonText">back</div>
      </Link>
    </motion.div>
  );
}
