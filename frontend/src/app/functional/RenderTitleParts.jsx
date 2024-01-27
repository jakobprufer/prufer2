import React from "react";
import Image from "next/image";

export function RenderTitleParts(title, scrollY) {
  return title.map((part, index) =>
    part.type === "text" ? (
      part.text.split("\n").map((line, i) => (
        <span
          key={`${index}-${i}`}
          className="titleText"
          style={{ display: "inline-block" }}
        >
          {line}
        </span>
      ))
    ) : part.type === "text2" ? (
      part.text.split("\n").map((line, i) => (
        <span
          key={`${index}-${i}`}
          className="titleText"
          style={{ display: "block" }}
        >
          {line}
        </span>
      ))
    ) : part.type === "link" ? (
      <a href={part.href}>{part.text}</a>
    ) : part.type === "headshot" ? (
      <Image
        alt={part.alt}
        src={part.src}
        key={index}
        width={part.w}
        height={part.h}
        className="headshot"
        style={{ transform: `translateY(${scrollY / 4}px)` }}
      />
    ) : part.type === "icon" ? (
      <Image
        alt={part.alt}
        src={part.src}
        key={index}
        width={part.w}
        height={part.h}
        className="icon"
        loading="eager"
      />
    ) : null
  );
}
