import { create } from "zustand";

export const useNavStore = create((set) => ({
  activeCard: "introCard",
  setActiveCard: (activeCard) => set({ activeCard }),
  activeCardId: 0,
  setActiveCardId: (activeCardId) => set({ activeCardId }),
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
  inside: false,
  setInside: (inside) => set({ inside }),
  lastInside: 0,
  setLastInside: (lastInside) => set({ lastInside }),
}));
