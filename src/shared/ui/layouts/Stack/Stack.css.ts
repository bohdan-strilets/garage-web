import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'flex',
    minWidth: 0,
  },

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },

    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },

    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },

    wrap: {
      true: { flexWrap: 'wrap' },
      false: { flexWrap: 'nowrap' },
    },

    gap: {
      xs: { gap: themeContract.space.xs },
      sm: { gap: themeContract.space.sm },
      md: { gap: themeContract.space.md },
      lg: { gap: themeContract.space.lg },
      xl: { gap: themeContract.space.xl },
    },
  },

  defaultVariants: {
    direction: 'column',
    wrap: false,
  },
})
