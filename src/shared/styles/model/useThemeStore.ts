import { create } from "zustand";

import { STORAGE_KEY } from "../constants/storageKey";
import { THEME_MODE } from "../enums/ThemeMode";
import { getSystemTheme } from "../utils/getSystemTheme";

import type { ThemeMode } from "../types/ThemeMode";
import type { ThemeState } from "../types/ThemeState";

export const useThemeStore = create<ThemeState>((set, get) => {
  const storageValue = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  const saved = typeof window !== "undefined" ? storageValue : null;
  const initialMode = saved ?? THEME_MODE.SYSTEM;

  return {
    mode: initialMode,
    resolvedMode: initialMode === THEME_MODE.SYSTEM ? getSystemTheme() : initialMode,

    setMode: mode => {
      localStorage.setItem(STORAGE_KEY, mode);

      set({
        mode,
        resolvedMode: mode === THEME_MODE.SYSTEM ? getSystemTheme() : mode,
      });
    },

    toggle: () => {
      const { resolvedMode } = get();

      const next = resolvedMode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;

      localStorage.setItem(STORAGE_KEY, next);

      set({
        mode: next,
        resolvedMode: next,
      });
    },
  };
});
