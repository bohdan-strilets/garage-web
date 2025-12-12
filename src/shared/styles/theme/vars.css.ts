import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  colors: {
    background: {
      default: null,
      muted: null,
      strong: null,
    },
    surface: {
      default: null,
      muted: null,
      strong: null,
    },
    text: {
      primary: null,
      secondary: null,
      disabled: null,
      inverted: null,
      muted: null,
    },
    border: {
      default: null,
      muted: null,
      strong: null,
    },
    primary: {
      solid: null,
      soft: null,
    },
    success: {
      solid: null,
      soft: null,
    },
    warning: {
      solid: null,
      soft: null,
    },
    danger: {
      solid: null,
      soft: null,
    },
    info: {
      solid: null,
      soft: null,
    },
    ring: {
      focus: null,
      outline: null,
    },
    overlay: {
      default: null,
      soft: null,
      strong: null,
    },
  },
  spaces: {
    none: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    xxxl: null,
  },
  fonts: {
    sizes: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      xxl: null,
      xxxl: null,
    },
    weights: {
      regular: null,
      medium: null,
      bold: null,
    },
    lineHeights: {
      tight: null,
      normal: null,
      relaxed: null,
    },
  },
  radius: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    pill: null,
  },
  shadows: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  zIndex: {
    base: null,
    header: null,
    dropdown: null,
    overlay: null,
    modal: null,
    toast: null,
    tooltip: null,
  },
  transitions: {
    fast: null,
    normal: null,
    slow: null,
    easingStandard: null,
    easingEmphasized: null,
  },
});

export type ThemeVars = typeof vars;
