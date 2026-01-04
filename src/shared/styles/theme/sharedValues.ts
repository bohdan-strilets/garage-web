export const sharedThemeValues = {
  space: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },

  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '9999px',
  },

  font: {
    family: {
      base: 'Inter, system-ui, -apple-system, sans-serif',
    },

    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },

    weight: {
      regular: '400',
      medium: '600',
      bold: '700',
    },

    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.8',
    },
  },

  zIndex: {
    base: '1',
    dropdown: '1000',
    modal: '1100',
    overlay: '1200',
  },

  layout: {
    header: {
      height: '64px',
    },

    container: {
      mobile: '100%',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },

    modal: {
      width: '100%',
      maxWidth: '520px',
    },
  },

  motion: {
    fast: '120ms',
    normal: '200ms',
    slow: '320ms',
  },

  borderWidth: {
    hairline: '1px',
    thin: '2px',
  },
} as const
