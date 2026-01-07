import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: 0,
})

export const image = recipe({
  base: {
    display: 'block',
    height: 'auto',
  },

  variants: {
    size: {
      xs: { width: vars.layout.logo.size.xs },
      sm: { width: vars.layout.logo.size.sm },
      md: { width: vars.layout.logo.size.md },
      lg: { width: vars.layout.logo.size.lg },
      xl: { width: vars.layout.logo.size.xl },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
