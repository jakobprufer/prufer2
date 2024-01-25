"use client";
import React, { useEffect, useState, useRef } from "react";
import "../components/ModelViewer.css";
import { useNavStore } from "../store/navStore";
import { Asap } from "next/font/google";
import { RiLoader3Line } from "react-icons/ri";

const ModelViewer = () => {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  const inside = useNavStore((state) => state.inside);

  const [rotation, setRotation] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate the rotation based on the passed scrollY prop
    const newRotation = (scrollY / 10) % 360;
    setRotation(newRotation);
  }, [scrollY]); // Dependency array ensures this runs only when scrollY changes

  //load model functionality
  const [model, setModel] = useState(null);
  const [modelSpinner, setModelSpinner] = useState(false);

  useEffect(() => {
    const modelElement = document.querySelector("#model");
    setModel(modelElement);
  }, []);

  return (
    <div className={`modelCont ${inside ? "inside" : null}`}>
      <model-viewer
        src="/glaceModel.glb" // Replace with your model path
        alt="A 3D model"
        auto-rotate
        reveal="manual"
        camera-controls
        id="model"
        style={{
          width: "800px",
          height: "100%",
          // transform: "translateY(-5vh)",
          background: "00000000",
        }}
        camera-orbit={`-${rotation}deg 80deg 2m`}
        // camera-orbit={`-20deg 80deg 4m`}
        // loading="eager"
        disable-zoom
        background-color="transparent"
        interaction-prompt="none"
        shadow-intensity="0.5"
      >
        <div id="lazy-load-poster" slot="poster"></div>
        <div
          id="button-load"
          className={`button featureButton iconReveal ${
            modelSpinner ? "fixed fixedHover" : null
          }`}
          slot="poster"
          onClick={() => {
            model.dismissPoster();
            setModelSpinner(true);
          }}
        >
          <div className="buttonText">Load 3D Model</div>
          <RiLoader3Line
            className={`buttonIcon ${modelSpinner ? "spinning" : null}`}
          />
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
