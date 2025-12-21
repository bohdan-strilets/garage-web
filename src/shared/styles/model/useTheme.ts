import { THEME_MODE } from "../enums/ThemeMode";

import { useThemeStore } from "./useThemeStore";

export const useTheme = () => {
  const mode = useThemeStore(state => state.mode);
  const resolvedMode = useThemeStore(state => state.resolvedMode);
  const setMode = useThemeStore(state => state.setMode);
  const toggle = useThemeStore(state => state.toggle);

  const isLight = resolvedMode === THEME_MODE.LIGHT;
  const isDark = resolvedMode === THEME_MODE.DARK;

  const setLight = () => setMode(THEME_MODE.LIGHT);
  const setDark = () => setMode(THEME_MODE.DARK);
  const setSystem = () => setMode(THEME_MODE.SYSTEM);

  return {
    mode,
    resolvedMode,
    isLight,
    isDark,
    setLight,
    setDark,
    setSystem,
    toggle,
  };
};
