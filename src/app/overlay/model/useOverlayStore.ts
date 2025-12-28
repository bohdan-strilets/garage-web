import { create } from "zustand";

import type { OverlayState } from "../types/OverlayState";

export const useOverlayStore = create<OverlayState>((set, get) => ({
  count: 0,

  openOverlay: () => set(state => ({ count: state.count + 1 })),
  closeOverlay: () => set(state => ({ count: Math.max(0, state.count - 1) })),
}));
