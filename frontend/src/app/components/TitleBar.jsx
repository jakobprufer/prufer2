"use client";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDownLine } from "react-icons/ri";
import { useTitleBarStore } from "../store/titleBarStore";
import { useNavStore } from "../store/navStore";
import { UseWindowSize } from "../functional/löaksjdf";

export default function TitleBar() {
  //getting states from store
  const showTitleBar = useTitleBarStore((state) => state.showTitleBar);
  const setShowTitleBar = useTitleBarStore((state) => state.setShowTitleBar);
  const expandTitleBar = useTitleBarStore((state) => state.expandTitleBar);
  const setExpandTitleBar = useTitleBarStore(
    (state) => state.setExpandTitleBar
  );
  const expandTitleBarInst = useTitleBarStore(
    (state) => state.expandTitleBarInst
  );
  const setExpandTitleBarInst = useTitleBarStore(
    (state) => state.setExpandTitleBarInst
  );
  const background = useTitleBarStore((state) => state.background);
  const scrollY = useNavStore((state) => state.scrollY);
  const inside = useNavStore((state) => state.inside);

  //showing TitleBar depending on scroll position
  const windowSize = UseWindowSize();

  useEffect(() => {
    if (scrollY > windowSize.height * 0.9) {
      setShowTitleBar(true);
    } else {
      setExpandTitleBar(false);
      setTimeout(() => {
        setShowTitleBar(false);
      }, 1);
    }
  }, [scrollY]);

  //title Bar expansion functionality
  const handleExpandTitleBar = () => {
    const currentExpandTitleBarInst = !expandTitleBarInst;
    setExpandTitleBarInst(currentExpandTitleBarInst);

    if (expandTitleBar) {
      setTimeout(() => {
        setExpandTitleBar(currentExpandTitleBarInst);
      }, 200);
    } else {
      setExpandTitleBar(true);
    }
  };

  //big breakpoint - needed because layout breaks framer animations on mobile (so deactivating it for small screen sizes)
  // const [smallScreen, setSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSmallScreen(windowSize.width < 600);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  //scroll to top functionality
  const scrollToTop = () => {
    const snapScrollCont = document.querySelector(".snapScrollCont");
    if (snapScrollCont) {
      snapScrollCont.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Fragment>
      {expandTitleBar ? (
        <div
          className="titleBarCollapseLayer"
          onClick={handleExpandTitleBar}
        ></div>
      ) : null}
      <div className="titleBarContainer">
        <AnimatePresence>
          {showTitleBar ? (
            <motion.div
              className={`titleBar container l2 ${background} ${
                inside ? "inside" : null
              } ${expandTitleBarInst ? "expanded" : null}`}
              initial={{ y: -80 }}
              animate={{ y: 0, position: "fixed" }}
              exit={{ y: -80 }}
              style={{
                borderRadius: "24px",
                // boxShadow: "0px 0px 10px #00000031",
                boxShadow: "0px 10px 20px #00000019",
              }} //inline because of framer motion bug
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
              <motion.div className="titleBarTop">
                <Link className="titleBarLeft" href="/" onClick={scrollToTop}>
                  <span className="barLogoText link">Jakob Prüfer</span>
                </Link>
                <motion.div
                  className={`button iconReveal ${
                    expandTitleBarInst ? "fixed" : null
                  }`}
                  onClick={handleExpandTitleBar}
                >
                  <div className="buttonText">About</div>{" "}
                  <RiArrowDownLine
                    className={`riIconInline ${
                      expandTitleBarInst ? "turned" : null
                    }`}
                  />
                </motion.div>
              </motion.div>
              {expandTitleBar ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0 }}
                  className={`titleBarExp`}
                >
                  {/* <motion.h3 className="mbs mts">About Me</motion.h3> */}
                  <motion.p className="titleBarP mbxs">
                    Hello, I&apos;m Jakob, a UX designer and web developer.
                    Coming from a background in psychology, I believe
                    today&apos;s challenges are best approached with an
                    integrated understanding of both technology and human
                    behaviour.
                  </motion.p>
                  <motion.p className="titleBarP mbs">
                    Originally from Berlin, I am currently based in London. This
                    portfolio showcases some of my recent work.
                  </motion.p>
                  <motion.p
                    className={`titleBarP titleBarTag mbxs ${background}`}
                  >
                    Get in touch:
                  </motion.p>
                  <motion.a
                    className="titleBarP mbm"
                    href="mailto:jakob@prufer.co"
                    style={{ display: "block" }}
                  >
                    jakob@prufer.co
                  </motion.a>
                  <Image
                    alt="Jakob Prufer standing in front of a white wall glancing to the right"
                    src="/jakob3.jpg"
                    width={1200}
                    height={1200}
                    className="barImage"
                  />
                </motion.div>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Fragment>
  );
}
