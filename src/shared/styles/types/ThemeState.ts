import type { ResolvedTheme } from "./ResolvedTheme";
import type { ThemeMode } from "./ThemeMode";

export type ThemeState = {
  mode: ThemeMode;
  resolvedMode: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
  init: () => void;
};
