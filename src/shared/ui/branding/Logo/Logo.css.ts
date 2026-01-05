import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

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
      xs: { width: themeContract.layout.logo.size.xs },
      sm: { width: themeContract.layout.logo.size.sm },
      md: { width: themeContract.layout.logo.size.md },
      lg: { width: themeContract.layout.logo.size.lg },
      xl: { width: themeContract.layout.logo.size.xl },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
