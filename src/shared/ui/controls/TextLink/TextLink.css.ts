import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {},

  variants: {
    tone: {
      primary: { color: vars.color.brand.primary },
      secondary: { color: vars.color.text.secondary },
      muted: { color: vars.color.text.muted },
    },

    underline: {
      true: { textDecoration: 'underline' },
      false: { textDecoration: 'none' },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },

  defaultVariants: {
    tone: 'primary',
    underline: false,
    align: 'left',
  },
})
