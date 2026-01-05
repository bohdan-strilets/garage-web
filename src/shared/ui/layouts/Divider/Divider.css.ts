import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    border: 'none',
    flexShrink: 0,
  },

  variants: {
    orientation: {
      horizontal: {
        height: '1px',
        width: '100%',
      },

      vertical: {
        width: '1px',
        alignSelf: 'stretch',
      },
    },

    tone: {
      default: { backgroundColor: themeContract.color.border.default },
      subtle: { backgroundColor: themeContract.color.border.subtle },
      accent: { backgroundColor: themeContract.color.border.accent },
    },

    inset: {
      true: { marginInline: themeContract.space.md },
    },
  },

  defaultVariants: {
    tone: 'default',
    orientation: 'horizontal',
  },
})
