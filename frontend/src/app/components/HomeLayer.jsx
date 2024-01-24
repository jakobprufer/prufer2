"use client";
import { useEffect } from "react";
import { useNavStore } from "../store/navStore";
import data from "../data/data.json";
import Card from "./Card";

export default function HomeLayer() {
  //loading states from stores
  const setActiveCard = useNavStore((state) => state.setActiveCard);
  const inside = useNavStore((state) => state.inside);
  const activeCardId = useNavStore((state) => state.activeCardId);
  const scrollY = useNavStore((state) => state.scrollY);
  // const lastInside = useNavStore((state) => state.lastInside);
  // const setLastInside = useNavStore((state) => state.setLastInside);

  //scroll restoration - using the scrollY from Zustand to set the position and the sessionStorage trigger the restoration
  // useEffect(() => {
  //   const snapScrollCont = document.querySelector(".snapScrollCont");
  //   if (lastInside) {
  //     snapScrollCont.scrollTo(0, scrollY);
  //     setLastInside(false);
  //   }
  // }, []);

  //keeping track of currently active card href
  useEffect(() => {
    if (activeCardId >= 0 && activeCardId < data.portfolio.length) {
      const activeCardHref = data.portfolio[activeCardId].href;
      setActiveCard(activeCardHref + "Card");
    }
  }, [activeCardId, data.portfolio]);

  return (
    <div
      className={`snapScrollCont ${inside ? "inside" : null}`}
      id="snapScrollCont"
    >
      {data.portfolio.map((item, index) => (
        <Card key={index} project={item} />
      ))}
    </div>
  );
}
