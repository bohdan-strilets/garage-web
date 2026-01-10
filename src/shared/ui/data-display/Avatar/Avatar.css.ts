import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: vars.font.weight.medium,

    backgroundColor: vars.color.brand.primarySoft,
    color: vars.color.text.primary,

    userSelect: 'none',
    overflow: 'hidden',
  },

  variants: {
    size: {
      xs: {
        width: vars.layout.avatar.size.xs,
        height: vars.layout.avatar.size.xs,
        fontSize: vars.font.size.xs,
      },
      sm: {
        width: vars.layout.avatar.size.sm,
        height: vars.layout.avatar.size.sm,
        fontSize: vars.font.size.sm,
      },
      md: {
        width: vars.layout.avatar.size.md,
        height: vars.layout.avatar.size.md,
        fontSize: vars.font.size.md,
      },
      lg: {
        width: vars.layout.avatar.size.lg,
        height: vars.layout.avatar.size.lg,
        fontSize: vars.font.size.lg,
      },
    },

    shape: {
      circle: { borderRadius: vars.radius.pill },
      rounded: { borderRadius: vars.radius.md },
    },
  },

  defaultVariants: {
    size: 'md',
    shape: 'circle',
  },
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})
