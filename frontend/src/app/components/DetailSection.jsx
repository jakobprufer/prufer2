"use client";
import React, { Fragment, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Image from "next/image";
import { UseWindowSize } from "../functional/UseWindowSize.jsx";

const DetailSection = ({ sections, colour }) => {
  //check if mobile
  const windowSize = UseWindowSize();
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    setSmallScreen(windowSize.width < 600);
  }, [windowSize]);

  // Initialize state for open/close status of sections
  const [openSections, setOpenSections] = useState({});

  // Toggle function for open/close status of a section
  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderHead = (headItems) => {
    const phase = headItems.find((item) => item.type === "phase")?.text;
    const headHeading = headItems.find(
      (item) => item.type === "headHeading"
    )?.text;
    const headImg = headItems.find((item) => item.type === "headImg");

    return (
      <>
        <motion.div className="headTitle" layout="position">
          {phase && <div className={`heading phase ${colour}`}>{phase}</div>}
          {headHeading && <h3 className="headHeading">{headHeading}</h3>}
        </motion.div>
        {headImg && (
          <motion.div
            layout="preserve-aspect"
            className="headImg"
            style={{
              borderRadius: smallScreen ? "8px" : "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src={headImg.src}
              alt={headImg.alt}
              width={1920}
              height={1080}
              className="sectionImg"
            />
          </motion.div>
        )}
      </>
    );
  };

  const renderContent = (contentItems) => {
    return contentItems.map((item, index) => {
      switch (item.type) {
        case "text":
          return <ReactMarkdown key={index}>{item.text}</ReactMarkdown>;
        case "ol":
          return (
            <ol className="sectionText">
              {item.items.map((li, index) => (
                <li key={index}>
                  <ReactMarkdown>{li}</ReactMarkdown>
                </li>
              ))}
            </ol>
          );
        case "ul":
          return (
            <ul className="sectionText">
              {item.items.map((li, index) => (
                <li key={index}>
                  <ReactMarkdown>{li}</ReactMarkdown>
                </li>
              ))}
            </ul>
          );
        case "image":
          return (
            <Image
              src={item.src}
              alt={item.alt}
              className="sectionImg contentImg"
              width={item.w}
              height={item.h}
            />
          );
        case "video":
          return (
            <div className="sectionVideoContCont">
              <div className="sectionVideoCont">
                <video className="sectionVideo" controls>
                  <source src={item.src} type="video/mp4"></source>
                </video>
              </div>
            </div>
          );
        case "h4":
          return <h4>{item.text}</h4>;
        case "caption":
          return (
            <div className="caption">
              <ReactMarkdown>{item.text}</ReactMarkdown>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <motion.section
      className="section"
      layout
      style={{ borderRadius: smallScreen ? "16px" : "24px" }}
    >
      {sections.map((section, index) => (
        <Fragment key={index}>
          <motion.div
            layout
            className={`sectionHead ${openSections[index] ? null : "closed"}`}
            onClick={() => toggleSection(index)}
          >
            {renderHead(section.head)}
          </motion.div>
          {openSections[index] && (
            <motion.div
              className="sectionContent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              {renderContent(section.content)}
            </motion.div>
          )}
        </Fragment>
      ))}
    </motion.section>
  );
};

export default DetailSection;
