"use client";
import { useState, useEffect } from "react";
import { useTitleBarStore } from "../store/titleBarStore";
import { useNavStore } from "../store/navStore";
import Image from "next/image";
import { RiNotionFill, RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import data from "../data/data.json";
import FadeIn from "../components/FadeIn";
import Hero from "../components/Hero";
import { renderTextArray } from "../functional/RenderTextArray";
import { renderTitleParts } from "../functional/RenderTitleParts";
import DetailIntro from "../components/DetailIntro";

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
    <div className={`page detail ${project.colour} ${project.href}`}>
      <BackButton colour={project.colour} />
      <FadeIn>
        <Hero project={project} inside={true} />
        {/* the dublicate hero above fixes the issue of a missing hero detail page refresh/landing */}
        <div className="detailContent">
          <DetailIntro project={project} />
        </div>
      </FadeIn>
    </div>
  );
}
