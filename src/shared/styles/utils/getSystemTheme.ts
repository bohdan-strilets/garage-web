import { THEME_MODE } from "../enums/ThemeMode";

import type { ResolvedTheme } from "../types/ResolvedTheme";

export const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === "undefined") {
    return THEME_MODE.LIGHT;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME_MODE.DARK
    : THEME_MODE.LIGHT;
};
