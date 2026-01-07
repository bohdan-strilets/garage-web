import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {},

  variants: {
    tone: {
      base: { backgroundColor: vars.color.surface.base },
      canvas: { backgroundColor: vars.color.surface.canvas },
      muted: { backgroundColor: vars.color.surface.muted },
      inverted: {
        backgroundColor: vars.color.surface.inverted,
        color: vars.color.text.inverted,
      },
    },

    shadow: {
      none: { boxShadow: 'none' },
      sm: { boxShadow: vars.shadow.sm },
      md: { boxShadow: vars.shadow.md },
      lg: { boxShadow: vars.shadow.lg },
    },

    radius: {
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
    },

    padding: {
      xs: { padding: vars.space.xs },
      sm: { padding: vars.space.sm },
      md: { padding: vars.space.md },
      lg: { padding: vars.space.lg },
      xl: { padding: vars.space.xl },
    },
  },

  defaultVariants: {
    tone: 'base',
    shadow: 'none',
  },
})
