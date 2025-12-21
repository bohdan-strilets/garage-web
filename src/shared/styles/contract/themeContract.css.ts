import { createThemeContract } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  color: {
    brand: {
      primary: null,
      primarySoft: null,
    },
    surface: {
      canvas: null,
      base: null,
      muted: null,
    },
    text: {
      primary: null,
      secondary: null,
      muted: null,
      inverted: null,
      onAccent: null,
    },
    border: {
      subtle: null,
      default: null,
      strong: null,
      accent: null,
    },
    status: {
      success: null,
      successSoft: null,
      warning: null,
      warningSoft: null,
      danger: null,
      dangerSoft: null,
    },
    overlay: {
      backdrop: null,
      hover: null,
    },
  },
  font: {
    family: {
      base: null,
      heading: null,
    },
    size: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      ["2xl"]: null,
    },
    lineHeight: {
      xs: null,
      sm: null,
      md: null,
    },
    letterSpacing: {
      xs: null,
      sm: null,
      md: null,
    },
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    ["2xl"]: null,
    ["3xl"]: null,
  },
  shadow: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  radius: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    pill: null,
  },
  motion: {
    fast: null,
    medium: null,
    slow: null,
  },
  zIndex: {
    dropdown: null,
    modal: null,
    popover: null,
    tooltip: null,
    sticky: null,
  },
});
