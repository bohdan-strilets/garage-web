import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

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
      default: { backgroundColor: vars.color.border.default },
      subtle: { backgroundColor: vars.color.border.subtle },
      accent: { backgroundColor: vars.color.border.accent },
    },

    inset: {
      true: { marginInline: vars.space.md },
    },
  },

  defaultVariants: {
    tone: 'default',
    orientation: 'horizontal',
  },
})
