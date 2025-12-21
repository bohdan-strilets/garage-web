import type { THEME_MODE } from "../enums/ThemeMode";

export type ThemeMode = (typeof THEME_MODE)[keyof typeof THEME_MODE];
