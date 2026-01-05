import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'grid',
    minWidth: 0,
  },

  variants: {
    gap: {
      xs: { gap: themeContract.space.xs },
      sm: { gap: themeContract.space.sm },
      md: { gap: themeContract.space.md },
      lg: { gap: themeContract.space.lg },
      xl: { gap: themeContract.space.xl },
    },

    align: {
      start: { alignItems: 'start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'end' },
      stretch: { alignItems: 'stretch' },
    },

    justify: {
      start: { justifyItems: 'start' },
      center: { justifyItems: 'center' },
      end: { justifyItems: 'end' },
      stretch: { justifyItems: 'stretch' },
    },
  },
})
