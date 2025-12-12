import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    lineHeight: vars.fonts.lineHeights.relaxed,
  },

  variants: {
    tone: {
      normal: { color: vars.colors.text.primary },
      muted: { color: vars.colors.text.muted },
      primary: { color: vars.colors.primary.solid },
      secondary: { color: vars.colors.text.secondary },
      success: { color: vars.colors.success.solid },
      warning: { color: vars.colors.warning.solid },
      danger: { color: vars.colors.danger.solid },
      info: { color: vars.colors.info.solid },
      inverted: { color: vars.colors.text.inverted },
      disabled: { color: vars.colors.text.disabled },
    },

    size: {
      xs: { fontSize: vars.fonts.sizes.xs },
      sm: { fontSize: vars.fonts.sizes.sm },
      md: { fontSize: vars.fonts.sizes.md },
      lg: { fontSize: vars.fonts.sizes.lg },
    },

    weight: {
      regular: { fontWeight: vars.fonts.weights.regular },
      medium: { fontWeight: vars.fonts.weights.medium },
      bold: { fontWeight: vars.fonts.weights.bold },
    },
  },
});
