import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'inline-block',
    flexShrink: 0,
    verticalAlign: 'middle',
  },

  variants: {
    size: {
      xs: {
        width: vars.layout.icon.size.xs,
        height: vars.layout.icon.size.xs,
      },

      sm: {
        width: vars.layout.icon.size.sm,
        height: vars.layout.icon.size.sm,
      },

      md: {
        width: vars.layout.icon.size.md,
        height: vars.layout.icon.size.md,
      },

      lg: {
        width: vars.layout.icon.size.lg,
        height: vars.layout.icon.size.lg,
      },
    },

    color: {
      default: { color: vars.color.text.primary },
      muted: { color: vars.color.text.secondary },
      danger: { color: vars.color.status.danger },
      warning: { color: vars.color.status.warning },
      success: { color: vars.color.status.success },
      inherit: { color: 'inherit' },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'inherit',
  },
})
