import { breakpointValues } from './breakpoints';
import type { AppTheme, BreakpointKey } from './types';

export const baseThemeTokens: AppTheme = {
  colors: {
    bg: 'var(--color-bg)',
    surface: 'var(--color-surface)',
    surfaceMuted: 'var(--color-surface-muted)',

    text: 'var(--color-text)',
    textMuted: 'var(--color-text-muted)',
    border: 'var(--color-border)',

    primary: 'var(--color-primary)',
    primarySoft: 'var(--color-primary-soft)',

    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
    successSoft: 'var(--color-success-soft)',
    warningSoft: 'var(--color-warning-soft)',
    dangerSoft: 'var(--color-danger-soft)',
  },

  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    card: 'var(--shadow-card)',
    insetSm: 'var(--shadow-inset-sm)',
  },

  radii: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
  },

  space: {
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    7: 'var(--space-7)',
    8: 'var(--space-8)',
  },

  typography: {
    fontFamily: {
      montserrat: 'var(--font-montserrat)',
      lobster: 'var(--font-lobster)',
    },
    fontSizes: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      md: 'var(--font-size-md)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
    },
  },

  input: {
    bg: 'var(--color-input-bg)',
    border: 'var(--color-input-border)',
    focus: 'var(--color-input-border-focus)',
    placeholder: 'var(--color-input-placeholder)',
  },

  focusRing: {
    color: 'var(--color-focus-ring)',
    width: 'var(--focus-ring-width)',
  },

  overlay: {
    color: 'var(--color-overlay)',
  },

  transitions: {
    fast: 'var(--transition-fast)',
    normal: 'var(--transition-normal)',
    slow: 'var(--transition-slow)',
  },

  breakpoints: {
    values: breakpointValues,
    up: (key: BreakpointKey) => `@media (min-width: ${breakpointValues[key]}px)`,
    down: (key: BreakpointKey) => {
      const value = breakpointValues[key];
      if (value === 0) return '@media (max-width: 99999px)';
      return `@media (max-width: ${value - 0.02}px)`;
    },
    between: (min: BreakpointKey, max: BreakpointKey) =>
      `@media (min-width: ${breakpointValues[min]}px) and (max-width: ${
        breakpointValues[max] - 0.02
      }px)`,
  },
};
