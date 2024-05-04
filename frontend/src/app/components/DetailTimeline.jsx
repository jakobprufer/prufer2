import React from "react";
import Image from "next/image";

export default function DetailTimeline({ file }) {
  return (
    <div>
      <Image src={file} width={1920} height={1080} className="detailTimeline" />
    </div>
  );
}
