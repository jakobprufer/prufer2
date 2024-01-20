import { create } from "zustand";

export const useTitleBarStore = create((set) => ({
  showTitleBar: false,
  setShowTitleBar: (showTitleBar) => set({ showTitleBar }),
  expandTitleBar: false,
  setExpandTitleBar: (expandTitleBar) => set({ expandTitleBar }),
  expandTitleBarInst: false, //to enable smooth height animation also on collapse
  setExpandTitleBarInst: (expandTitleBarInst) => set({ expandTitleBarInst }), //to enable smooth height animation also on collapse
  background: "dark",
  setBackground: (background) => set({ background }),
}));
