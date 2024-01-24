// "use client";
// import React, { useEffect, useState } from "react";
// import "@google/model-viewer";
// import "../components/ModelViewer.css";
// import { useNavStore } from "../store/navStore";

// const ModelViewer = ({ scrollY }) => {
//   const inside = useNavStore((state) => state.inside);

//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     // Calculate the rotation based on the passed scrollY prop
//     const newRotation = (scrollY / 10) % 360;
//     setRotation(newRotation);
//   }, [scrollY]); // Dependency array ensures this runs only when scrollY changes

//   return (
//     <div className={`modelCont ${inside ? "inside" : null}`}>
//       <model-viewer
//         src="/glaceModel.glb" // Replace with your model path
//         alt="A 3D model"
//         auto-rotate
//         camera-controls
//         style={{
//           width: "600px",
//           height: "600px",
//           background: "00000000",
//         }}
//         camera-orbit={`-${rotation}deg 80deg 4m`}
//         loading="eager"
//         disable-zoom
//         background-color="transparent"
//         interaction-prompt="none"
//         shadow-intensity="0.5"
//       >
//         <div id="poster" slot="poster"></div>
//       </model-viewer>
//     </div>
//   );
// };

// export default ModelViewer;
