import React, { Fragment, useRef, useEffect } from "react";
import { useNavStore } from "../store/navStore";
import StarryBackground from "./StarryBackground";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Hero({ project, inside }) {
  //getting states from nav store
  const insideCopy = inside ? inside : useNavStore((state) => state.inside);
  const scrollY = useNavStore((state) => state.scrollY);

  //stop video on detail enter
  const videoRef = useRef(null); // Ref for the video element

  useEffect(() => {
    // Effect to stop video playback when insideCopy is true
    if (insideCopy && videoRef.current) {
      videoRef.current.pause();
    }
  }, [insideCopy]); // Dependency array includes insideCopy

  return (
    <Fragment>
      {project.hero && project.hero.type === "image" ? (
        <div
          className={`hero ${insideCopy ? "inside" : null}`}
          // style={{
          //   transform: `translateY(${
          //     (scrollY - project.index * window.innerHeight) / 4
          //   }px)`,
          // }}
        >
          <Image
            alt={project.hero.alt}
            src={project.hero.src}
            width={project.hero.w}
            height={project.hero.h}
            className="heroImage"
          />
          {project.href === "lostboy" && <StarryBackground />}
        </div>
      ) : null}
      {project.hero && project.hero.type === "video" ? (
        <div
          className={`hero video ${insideCopy ? "inside" : null}`}
          // style={{
          //   transform: `translateY(${
          //     (scrollY - project.index * window.innerHeight) / 4
          //   }px)`,
          // }}
        >
          <video
            // autoPlay
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
