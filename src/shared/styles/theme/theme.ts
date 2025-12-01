import { baseThemeTokens } from './tokens';
import type { AppTheme } from './types';

export const lightTheme: AppTheme = {
  ...baseThemeTokens,
};

export const darkTheme: AppTheme = {
  ...baseThemeTokens,
  colors: {
    ...baseThemeTokens.colors,
    bg: '#020617',
    surface: '#020617',
    surfaceMuted: '#0f172a',

    text: '#e5e7eb',
    textMuted: '#9ca3af',
    border: '#1f2937',

    primary: baseThemeTokens.colors.primary,
    primarySoft: 'rgba(58, 119, 255, 0.25)',

    success: '#22c55e',
    warning: '#eab308',
    danger: '#f97373',
  },
};
