"use client";
import { useEffect, useState, useRef } from "react";
import CarouselIndicator from "./components/CarouselIndicator";
import ScrollGuide from "./components/ScrollGuide";
import data from "./data/data.json";
import { useTitleBarStore } from "./store/titleBarStore.jsx";
import { useNavStore } from "./store/navStore";

export default function Home() {
  //loading states from stores
  const setInside = useNavStore((state) => state.setInside);
  const background = useTitleBarStore((state) => state.background);
  const activeCardId = useNavStore((state) => state.activeCardId);
  const scrollY = useNavStore((state) => state.scrollY);
  const setScrollY = useNavStore((state) => state.setScrollY);
  const setActiveCardId = useNavStore((state) => state.setActiveCardId);
  const setBackground = useTitleBarStore((state) => state.setBackground);

  //initialising states correctly for home page
  useEffect(() => {
    setInside(false);
  }, []);

  //track snapScrollCont progress, active card and card background colour
  useEffect(() => {
    let frameId = null;
    const snapScrollCont = document.querySelector(".snapScrollCont");

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const containerHeight = snapScrollCont.clientHeight;
        const scrollPosition = snapScrollCont.scrollTop;

        let backgroundCardIndex = 0;
        let newDotCardIndex = 0;

        const cards = document.querySelectorAll(".card");
        cards.forEach((card, index) => {
          const cardTop = card.offsetTop;
          const cardHeight = card.clientHeight;

          // Calculate backgroundCardIndex with / 6 for background colour (if a card takes more than 1/6th from the top of viewport)
          if (
            cardTop <= scrollPosition + containerHeight / 6 &&
            cardTop + cardHeight > scrollPosition + containerHeight / 6
          ) {
            backgroundCardIndex = index;
          }

          // Calculate dotCardIndex with / 2 for active card (if a card takes more than of the viewport)
          if (
            cardTop <= scrollPosition + containerHeight / 2 &&
            cardTop + cardHeight > scrollPosition + containerHeight / 2
          ) {
            newDotCardIndex = index;
          }
        });

        const currentBackgroundCard = data.portfolio[backgroundCardIndex];

        setActiveCardId(newDotCardIndex);
        setScrollY(scrollPosition);
        setBackground(
          currentBackgroundCard ? currentBackgroundCard.colour : "dark"
        );
      });
    };

    snapScrollCont.addEventListener("scroll", handleScroll);

    return () => {
      snapScrollCont.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  //updating body background colour through background.css
  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(background);
  }, [background]);

  return (
    <main className={`page ${background}`}>
      <CarouselIndicator
        totalCards={data.portfolio.length}
        activeCardId={activeCardId}
      />
      <ScrollGuide scrollY={scrollY} />
    </main>
  );
}
