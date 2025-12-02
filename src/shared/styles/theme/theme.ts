import { baseThemeTokens } from './tokens';
import type { AppTheme } from './types';

export const lightTheme: AppTheme = {
  ...baseThemeTokens,
};

export const darkTheme: AppTheme = {
  ...baseThemeTokens,
  colors: {
    ...baseThemeTokens.colors,
    bg: '#111111',
    surface: '#181818',
    surfaceMuted: '#202020',

    text: '#f3f3f3',
    textMuted: '#b0b0b0',
    border: '#3a3a3a',

    primary: baseThemeTokens.colors.primary,
    primarySoft: 'rgba(255, 224, 0, 0.35)',

    success: baseThemeTokens.colors.success,
    warning: baseThemeTokens.colors.warning,
    danger: baseThemeTokens.colors.danger,
  },
};
