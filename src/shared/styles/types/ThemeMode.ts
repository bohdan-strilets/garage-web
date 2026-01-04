import type { THEME } from '../enums/Theme'

export type ThemeMode = (typeof THEME)[keyof typeof THEME]
