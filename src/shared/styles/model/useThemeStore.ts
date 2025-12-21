import { create } from "zustand";

import { STORAGE_KEY } from "../constants/storageKey";
import { THEME_MODE } from "../enums/ThemeMode";
import { getSystemTheme } from "../utils/getSystemTheme";

import type { ThemeMode } from "../types/ThemeMode";
import type { ThemeState } from "../types/ThemeState";

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: THEME_MODE.SYSTEM,
  resolvedMode: THEME_MODE.LIGHT,

  init: () => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const mode = saved ?? THEME_MODE.SYSTEM;
    const isSystem = mode === THEME_MODE.SYSTEM;

    set({ mode, resolvedMode: isSystem ? getSystemTheme() : mode });
  },

  setMode: mode => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, mode);
    }

    const isSystem = mode === THEME_MODE.SYSTEM;
    set({ mode, resolvedMode: isSystem ? getSystemTheme() : mode });
  },

  toggle: () => {
    const { resolvedMode } = get();

    const light = THEME_MODE.LIGHT;
    const dark = THEME_MODE.DARK;
    const isLight = resolvedMode === light;

    const next = isLight ? dark : light;

    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }

    set({ mode: next, resolvedMode: next });
  },
}));
