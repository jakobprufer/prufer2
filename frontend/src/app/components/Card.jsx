"use client";
import Image from "next/image";
import ModelViewer from "./ModelViewer";
import { RiArrowRightLine, RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";
import { useNavStore } from "../store/navStore";
import Hero from "./Hero";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { RenderTextArray } from "../functional/RenderTextArray";
import { renderTitleParts } from "../functional/RenderTitleParts";

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
      // {...(inside && {
      //   style: { transform: `translateY(-${lastInside * 100}vh)` },
      // })}
    >
      <Hero project={project} scrollY={scrollY} />
      {!inside ? (
        <div className={`cardBackground ${project.colour}`}></div>
      ) : null}
      {!inside ? (
        <motion.div className={`cardContent ${project.colour}`}>
          {project.title && (
            <FadeIn>
              {project.preTitle && (
                <div className="preTitle">{project.preTitle}</div>
              )}
              <div className="title">
                {RenderTitleParts(project.title, scrollY)}
              </div>
            </FadeIn>
          )}
          <FadeIn>
            <div className="subtitles">
              {project.teaserShort &&
                project.teaserShort.map((item, index) => {
                  return (
                    <div key={index} className="subtitleLine">
                      {RenderTextArray(item)}
                    </div>
                  );
                })}
              {project.myRole && (
                <div className="subtitleLine noMobile">
                  <div className="heading">My Role</div>
                  <p className="text">{project.myRole}</p>
                </div>
              )}
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
                  <div className="riIconInline">
                    <RiArrowRightLine className="before" />
                    <RiArrowRightLine className="main" />
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>
        </motion.div>
      ) : null}
      {/* {project.model && <ModelViewer scrollY={scrollY} />} */}
      {/* {description && <p className="description">{description}</p>} */}
    </div>
  );
}
