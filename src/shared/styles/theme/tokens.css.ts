export const lightColors = {
  background: {
    default: 'oklch(0.961 0 89.876)',
    muted: 'oklch(0.925 0 89.876)',
    strong: 'oklch(0.864 0 89.876)',
  },
  surface: {
    default: 'oklch(1 0 89.876)',
    muted: 'oklch(0.944 0.004 286.323)',
    strong: 'oklch(0.875 0.007 285.669)',
  },
  text: {
    primary: 'oklch(0.244 0 89.876)',
    secondary: 'oklch(0.327 0 89.876)',
    disabled: 'oklch(0.629 0 89.876)',
    inverted: 'oklch(0.961 0 89.876)',
    muted: 'oklch(0.515 0 89.876)',
  },
  border: {
    default: 'oklch(0.856 0 89.876)',
    muted: 'oklch(0.904 0 89.876)',
    strong: 'oklch(0.688 0 89.876)',
  },

  primary: {
    solid: 'oklch(0.825 0.171 80.013)',
    soft: 'oklch(0.825 0.171 80.013 / 0.45)',
  },
  success: {
    solid: 'oklch(0.479 0.133 141.868)',
    soft: 'oklch(0.479 0.133 141.868 / 0.22)',
  },
  warning: {
    solid: 'oklch(0.671 0.202 45.16)',
    soft: 'oklch(0.671 0.202 45.16 / 0.22)',
  },
  danger: {
    solid: 'oklch(0.622 0.237 26.803)',
    soft: 'oklch(0.622 0.237 26.803 / 0.22)',
  },
  info: {
    solid: 'oklch(0.55 0.262 258.02)',
    soft: 'oklch(0.55 0.262 258.02 / 0.22)',
  },

  ring: {
    focus: 'oklch(0.825 0.171 80.013 / 0.55)',
    outline: 'oklch(0.825 0.171 80.013 / 0.32)',
  },

  overlay: {
    soft: 'oklch(0 0 0 / 0.32)',
    default: 'oklch(0 0 0 / 0.52)',
    strong: 'oklch(0 0 0 / 0.72)',
  },
} as const;

export const darkColors = {
  background: {
    default: 'oklch(0.244 0.004 247.217)',
    muted: 'oklch(0.293 0.004 247.08)',
    strong: 'oklch(0.17 0.003 247.137)',
  },
  surface: {
    default: 'oklch(0.307 0.008 247.285)',
    muted: 'oklch(0.345 0.011 247.767)',
    strong: 'oklch(0.214 0.007 247.146)',
  },
  text: {
    primary: 'oklch(0.955 0.018 279.534)',
    secondary: 'oklch(0.868 0.022 278.598)',
    disabled: 'oklch(0.716 0.02 266.83)',
    inverted: 'oklch(0.244 0.004 247.217)',
    muted: 'oklch(0.768 0.02 266.923)',
  },
  border: {
    muted: 'oklch(1 0 0 / 0.06)',
    default: 'oklch(1 0 0 / 0.10)',
    strong: 'oklch(1 0 0 / 0.16)',
  },

  primary: {
    solid: 'oklch(0.825 0.171 80.013)',
    soft: 'oklch(0.825 0.171 80.013 / 0.42)',
  },
  success: {
    solid: 'oklch(0.479 0.133 141.868)',
    soft: 'oklch(0.479 0.133 141.868 / 0.30)',
  },
  warning: {
    solid: 'oklch(0.57 0.186 45.16)',
    soft: 'oklch(0.57 0.186 45.16 / 0.30)',
  },
  danger: {
    solid: 'oklch(0.53 0.204 26.803)',
    soft: 'oklch(0.53 0.204 26.803 / 0.30)',
  },
  info: {
    solid: 'oklch(0.6 0.234 258.02)',
    soft: 'oklch(0.6 0.234 258.02 / 0.30)',
  },

  ring: {
    focus: 'oklch(0.825 0.171 80.013 / 0.70)',
    outline: 'oklch(0.825 0.171 80.013 / 0.45)',
  },

  overlay: {
    soft: 'oklch(0 0 0 / 0.46)',
    default: 'oklch(0 0 0 / 0.66)',
    strong: 'oklch(0 0 0 / 0.86)',
  },
} as const;

export const lightShadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.06)',
  sm: '0 2px 6px rgba(0, 0, 0, 0.08)',
  md: '0 8px 16px rgba(0, 0, 0, 0.10)',
  lg: '0 16px 32px rgba(0, 0, 0, 0.12)',
  xl: '0 28px 56px rgba(0, 0, 0, 0.14)',
} as const;

export const darkShadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.35)',
  sm: '0 2px 8px rgba(0, 0, 0, 0.45)',
  md: '0 10px 20px rgba(0, 0, 0, 0.55)',
  lg: '0 18px 40px rgba(0, 0, 0, 0.65)',
  xl: '0 30px 70px rgba(0, 0, 0, 0.75)',
} as const;

export const spaces = {
  none: '0px',
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  xxl: '30px',
  xxxl: '35px',
} as const;

export const fonts = {
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '1.75rem',
    xxxl: '2rem',
  },
  weights: {
    regular: '400',
    medium: '600',
    bold: '700',
  },
  lineHeights: {
    tight: '0.75rem',
    normal: '1rem',
    relaxed: '1.25rem',
  },
} as const;

export const radius = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  pill: '50%',
} as const;

export const zIndex = {
  base: '0',
  header: '10',
  dropdown: '20',
  overlay: '30',
  modal: '40',
  toast: '50',
  tooltip: '60',
} as const;

export const transitions = {
  fast: '120ms',
  normal: '180ms',
  slow: '240ms',
  easingStandard: 'cubic-bezier(0.2, 0, 0.2, 1)',
  easingEmphasized: 'cubic-bezier(0.2, 0, 0, 1)',
} as const;
