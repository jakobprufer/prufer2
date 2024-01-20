"use client";
import { useState, useEffect } from "react";
import { useTitleBarStore } from "../store/titleBarStore";
import { useNavStore } from "../store/navStore";
import Image from "next/image";
import { RiNotionFill } from "react-icons/ri";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import data from "../data/data.json";
import FadeIn from "../components/FadeIn";
import Hero from "../components/Hero";

export default function LostBoy() {
  //select project
  const projecthref = "lostboy";
  const project = data.portfolio.find(
    (project) => project.href === projecthref
  );

  //loading data from store
  const setBackground = useTitleBarStore((state) => state.setBackground);
  const setShowTitleBar = useTitleBarStore((state) => state.setShowTitleBar);
  const setInside = useNavStore((state) => state.setInside);
  const setActiveCardId = useNavStore((state) => state.setActiveCardId);
  const setLastInside = useNavStore((state) => state.setLastInside);

  //initializing states correctly for detail page and respective project
  useEffect(() => {
    setBackground(project.colour);
    setTimeout(() => {
      setShowTitleBar(true);
    }, 5);
    setInside(true);
    setActiveCardId(project.index);
    setLastInside(project.index);
  }, []);

  return (
    <div
      className={`page detail ${project.colour}`}
      style={{ height: "200vh" }}
    >
      <div className={`page detail ${project.colour}`}>
        <BackButton colour={project.colour} />
      </div>
    </div>
  );
}
