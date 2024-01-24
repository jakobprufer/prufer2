import React from "react";
import ModelViewer from "./ModelViewer";

export default function DetailFeature({ featureId }) {
  return (
    <div className="detailFeature">
      {featureId === "glacemodel" && <ModelViewer />}
    </div>
  );
}
