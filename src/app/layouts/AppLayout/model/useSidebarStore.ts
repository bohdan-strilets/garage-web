import { create } from 'zustand'

import { SIDEBAR_VARIANT } from '../enums/sidebarVariant'

import type { SidebarStore } from '../types/SidebarStore'

export const useSidebarStore = create<SidebarStore>(set => ({
  state: SIDEBAR_VARIANT.COLLAPSED,

  open: () => set({ state: SIDEBAR_VARIANT.OPEN }),
  collapse: () => set({ state: SIDEBAR_VARIANT.COLLAPSED }),
  toggle: () =>
    set(s => ({
      state:
        s.state === SIDEBAR_VARIANT.OPEN
          ? SIDEBAR_VARIANT.COLLAPSED
          : SIDEBAR_VARIANT.OPEN,
    })),
}))
