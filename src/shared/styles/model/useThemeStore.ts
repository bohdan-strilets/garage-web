import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { STORAGE_KEYS } from '@shared/config/storageKeys'

import { THEME } from '../enums/Theme'

import type { ThemeState } from '../types/ThemeState'

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      mode: THEME.SYSTEM,
      resolvedTheme: THEME.LIGHT,

      setMode: mode => set({ mode }),
      setResolvedTheme: resolvedTheme => set({ resolvedTheme }),
    }),

    {
      name: STORAGE_KEYS.THEME,
      partialize: state => ({ mode: state.mode }),
    },
  ),
)
