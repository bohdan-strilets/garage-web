import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    fontWeight: vars.fonts.weights.bold,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },

  variants: {
    size: {
      md: { fontSize: vars.fonts.sizes.md },
      lg: { fontSize: vars.fonts.sizes.lg },
      xl: { fontSize: vars.fonts.sizes.xl },
      xxl: { fontSize: vars.fonts.sizes.xxl },
      xxxl: { fontSize: vars.fonts.sizes.xxxl },
    },
  },
});
