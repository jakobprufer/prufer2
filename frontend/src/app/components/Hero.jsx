"use client";
import React, { Fragment, useRef, useEffect, useState } from "react";
import { useNavStore } from "../store/navStore";
import StarryBackground from "./StarryBackground";
import Image from "next/image";

export default function Hero({ project, inside }) {
  //getting states from nav store
  const storedInside = useNavStore((state) => state.inside);
  const insideCopy = inside ? inside : storedInside;

  //stop video on detail enter
  const videoRef = useRef(null); // Ref for the video element

  useEffect(() => {
    // Effect to stop video playback when insideCopy is true
    if (insideCopy && videoRef.current) {
      videoRef.current.pause();
    }
  }, [insideCopy]); // Dependency array includes insideCopy

  //hide lostboy background until image loaded
  const [showStars, setShowStars] = useState(false);

  return (
    <Fragment>
      {project.hero && project.hero.type === "image" ? (
        <div className={`hero ${insideCopy ? "inside" : null}`}>
          <Image
            alt={project.hero.alt}
            src={project.hero.src}
            width={project.hero.w}
            height={project.hero.h}
            className="heroImage"
            loading="eager"
            onLoad={project.href == "lostboy" ? () => setShowStars(true) : null}
          />
          {project.href === "lostboy" && showStars ? (
            <StarryBackground />
          ) : null}
        </div>
      ) : null}
      {project.hero && project.hero.type === "video" ? (
        <div className={`hero video ${insideCopy ? "inside" : null}`}>
          <video
            loop
            muted={insideCopy ? false : true}
            playsInline
            className="heroVideo"
            src={project.hero.src}
            controls={insideCopy ? true : false}
            poster={project.hero.thumbnail}
            ref={videoRef}
          ></video>
        </div>
      ) : null}
    </Fragment>
  );
}
