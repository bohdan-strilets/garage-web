export const motion = {
  duration: {
    fast: '120ms',
    base: '200ms',
    slow: '320ms',
  },

  delay: {
    short: '40ms',
    medium: '80ms',
    long: '160ms',
  },

  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    emphasized: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
  },
} as const
