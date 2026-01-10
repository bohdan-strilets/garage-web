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
        width: vars.layout.input.size.sm,
        height: vars.layout.input.size.sm,
      },
      md: {
        width: vars.layout.input.size.md,
        height: vars.layout.input.size.md,
      },
      lg: {
        width: vars.layout.input.size.lg,
        height: vars.layout.input.size.lg,
      },
    },
  },
})
