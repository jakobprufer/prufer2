"use client";
import { useState, useEffect } from "react";
import { useTitleBarStore } from "../store/titleBarStore";
import { useNavStore } from "../store/navStore";
import BackButton from "../components/BackButton";
import data from "../data/data.json";
import FadeIn from "../components/FadeIn";
import Hero from "../components/Hero";
import DetailIntro from "../components/DetailIntro";
import DetailSection from "../components/DetailSection";

export default function Glace() {
  //select project
  const projecthref = "glace";
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
    document.body.classList = "";
    document.body.classList.add(project.colour);
  }, []);

  return (
    <div className={`page detail ${project.colour} ${project.href}`}>
      <BackButton colour={project.colour} />
      <FadeIn>
        <Hero project={project} inside={true} />
        {/* the dublicate hero above fixes the issue of a missing hero detail page refresh/landing */}
        <div className="detailContent">
          <DetailIntro project={project} />
          <div className="detailProcess">
            <h2>Process</h2>
            {project.process.map((section, index) => (
              <DetailSection key={index} sections={[section]} />
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
