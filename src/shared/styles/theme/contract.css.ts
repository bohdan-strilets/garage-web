import { createThemeContract } from '@vanilla-extract/css'

export const themeContract = createThemeContract({
  color: {
    brand: {
      primary: null,
    },

    surface: {
      canvas: null,
      base: null,
      muted: null,
      inverted: null,
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
      accent: null,
    },

    status: {
      success: null,
      warning: null,
      danger: null,
    },
  },

  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },

  radius: {
    sm: null,
    md: null,
    lg: null,
    pill: null,
  },

  font: {
    family: {
      base: null,
    },

    size: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
    },

    weight: {
      regular: null,
      medium: null,
      bold: null,
    },

    lineHeight: {
      tight: null,
      normal: null,
      relaxed: null,
    },
  },

  shadow: {
    sm: null,
    md: null,
    lg: null,
  },

  zIndex: {
    base: null,
    dropdown: null,
    modal: null,
    overlay: null,
  },

  layout: {
    header: {
      height: null,
    },

    container: {
      mobile: null,
      tablet: null,
      laptop: null,
      desktop: null,
    },

    modal: {
      width: null,
      maxWidth: null,
    },

    input: {
      height: {
        sm: null,
        md: null,
        lg: null,
      },
    },

    icon: {
      size: {
        xs: null,
        sm: null,
        md: null,
        lg: null,
      },
    },
  },

  motion: {
    duration: {
      fast: null,
      base: null,
      slow: null,
    },

    delay: {
      short: null,
      medium: null,
      long: null,
    },

    easing: {
      standard: null,
      emphasized: null,
      linear: null,
    },
  },
})
