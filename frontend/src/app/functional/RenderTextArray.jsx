import React from "react";
import Image from "next/image";

export function RenderTextArray(line) {
  return line.map((part, index) => {
    if (part.type === "text") {
      return (
        <p key={index} className="text">
          {part.text}
        </p>
      );
    } else if (part.type === "heading") {
      return (
        <div key={index} className="heading">
          {part.text}
        </div>
      );
    } else if (part.type === "icon") {
      return (
        <Image
          key={index}
          src={part.src}
          alt={part.alt}
          width={32} // Set the appropriate size for your icons
          height={32} // Set the appropriate size for your icons
          className="icon"
        />
      );
    }
  });
}
