import { create } from "zustand";

import type { LayoutState } from "../types/LayoutState";

export const useLayoutStore = create<LayoutState>(set => ({
  isSidebarOpen: false,

  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
  toggleSidebar: () => set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
