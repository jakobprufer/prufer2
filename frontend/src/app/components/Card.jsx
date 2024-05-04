"use client";
import Image from "next/image";
import ModelViewer from "./ModelViewer";
import { RiArrowRightLine, RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";
import { useNavStore } from "../store/navStore";
import Hero from "./Hero";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { RenderTextArray } from "../functional/RenderTextArray.jsx";
import { RenderTitleParts } from "../functional/RenderTitleParts.jsx";

export default function Card({ project }) {
  //using nav store
  const inside = useNavStore((state) => state.inside);
  const scrollY = useNavStore((state) => state.scrollY);
  // const setPathMarker = useNavStore((state) => state.setPathMarker);

  //saving scroll position to session storage (handled by action buttons in cards)
  // const handleRouteChange = ({ href }) => {
  //   setPathMarker(scrollY);
  // };

  return (
    <div
      className={`card ${project.href} ${inside && "inside"}}`}
      id={`${project.href}Card`}
    >
      <Hero project={project} scrollY={scrollY} />
      {!inside ? (
        <div className={`cardBackground ${project.colour}`}></div>
      ) : null}
      {!inside ? (
        <motion.div className={`cardContent ${project.colour}`}>
          {project.type === "project" && (
            <>
              <FadeIn className="project">
                <div className="cardCaption">
                  {project.brand && (
                    <div className={`preTitle ${project.colour}`}>
                      {RenderTitleParts(project.brand, scrollY)}
                    </div>
                  )}
                  <div className="title">
                    {RenderTitleParts(project.title, scrollY)}
                  </div>
                  <div className={`subtitles ${project.colour}`}>
                    {project.myRole && (
                      <div className="subtitleLine noMobile">
                        <p className="text">{project.myRole}</p>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
              <div className="cardActions">
                {project.action && (
                  <FadeIn>
                    <Link
                      className={`container l2 button iconSlide right ${project.colour}`}
                      href={project.href}
                      // onClick={() => handleRouteChange({ href: project.href })}
                    >
                      <div className="hoverShadow"></div>
                      <div className="buttonText">{project.action}</div>
                      <div className="buttonIcon">
                        <RiArrowRightLine className="before" />
                        <RiArrowRightLine className="main" />
                      </div>
                    </Link>
                  </FadeIn>
                )}
              </div>
            </>
          )}
          {project.type === "info" && (
            <FadeIn>
              <div className="info">
                {project.preTitle && (
                  <div className={`preTitle ${project.colour}`}>
                    {RenderTitleParts(project.preTitle, scrollY)}
                  </div>
                )}
                <div className="title">
                  {RenderTitleParts(project.title, scrollY)}
                </div>
                {/* <div className={`subtitles ${project.colour}`}>
                {project.myRole && (
                  <div className="subtitleLine noMobile">
                    <p className="text">{project.myRole}</p>
                  </div>
                )}
              </div> */}
              </div>
            </FadeIn>
          )}
        </motion.div>
      ) : null}
      {/* {project.model && <ModelViewer scrollY={scrollY} />} */}
      {/* {description && <p className="description">{description}</p>} */}
    </div>
  );
}
