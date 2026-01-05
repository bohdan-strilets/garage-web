import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {},

  variants: {
    tone: {
      base: { backgroundColor: themeContract.color.surface.base },
      canvas: { backgroundColor: themeContract.color.surface.canvas },
      muted: { backgroundColor: themeContract.color.surface.muted },
      inverted: {
        backgroundColor: themeContract.color.surface.inverted,
        color: themeContract.color.text.inverted,
      },
    },

    shadow: {
      none: { boxShadow: 'none' },
      sm: { boxShadow: themeContract.shadow.sm },
      md: { boxShadow: themeContract.shadow.md },
      lg: { boxShadow: themeContract.shadow.lg },
    },

    radius: {
      sm: { borderRadius: themeContract.radius.sm },
      md: { borderRadius: themeContract.radius.md },
      lg: { borderRadius: themeContract.radius.lg },
    },

    padding: {
      xs: { padding: themeContract.space.xs },
      sm: { padding: themeContract.space.sm },
      md: { padding: themeContract.space.md },
      lg: { padding: themeContract.space.lg },
      xl: { padding: themeContract.space.xl },
    },
  },

  defaultVariants: {
    tone: 'base',
    shadow: 'none',
  },
})
