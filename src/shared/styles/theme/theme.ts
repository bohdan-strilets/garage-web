import { baseThemeTokens } from './tokens';
import type { AppTheme } from './types';

export const lightTheme: AppTheme = {
  ...baseThemeTokens,
};

export const darkTheme: AppTheme = {
  ...baseThemeTokens,
  colors: {
    ...baseThemeTokens.colors,
    bg: '##1f1f1f',
    surface: '#292929',
    surfaceMuted: '#303030',

    text: '#cfcfcf',
    textMuted: '#adadad',
    border: '#7a7a7a',

    primary: baseThemeTokens.colors.primary,
    primarySoft: 'rgba(255, 94, 98, 0.3)',

    success: '#22c55e',
    warning: '#eab308',
    danger: '#f97373',
  },
};
