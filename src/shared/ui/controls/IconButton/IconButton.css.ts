import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'inline-flex',
    padding: 0,
  },

  variants: {
    size: {
      sm: {
        width: vars.layout.input.height.sm,
        height: vars.layout.input.height.sm,
      },
      md: {
        width: vars.layout.input.height.md,
        height: vars.layout.input.height.md,
      },
      lg: {
        width: vars.layout.input.height.lg,
        height: vars.layout.input.height.lg,
      },
    },
  },
})
