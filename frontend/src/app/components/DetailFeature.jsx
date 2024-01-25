import React, { Fragment, useState } from "react";
import ModelViewer from "./ModelViewer";
import { RiArrowRightDownLine } from "react-icons/ri";

export default function DetailFeature({ featureId }) {
  const [stacked, setStacked] = useState(true);

  return (
    <div className="detailFeature">
      {featureId === "glacemodel" && <ModelViewer />}
      {featureId === "lostboylogo" && (
        <Fragment>
          <img
            src="lostboy/Logo1.svg"
            draggable="false"
            className={`logo1 ${stacked ? "stacked" : null}`}
          />
          <img
            src="lostboy/Logo2.svg"
            draggable="false"
            className={`logo2 ${stacked ? "stacked" : null}`}
          />
          <div
            className="container dark button featureButton iconReveal"
            onClick={() => setStacked(!stacked)}
          >
            <div className="buttonText">Transform Logo</div>
            <RiArrowRightDownLine
              className={`buttonIcon ${stacked ? "turned" : null}`}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
}
