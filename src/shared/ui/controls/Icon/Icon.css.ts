import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'inline-block',
    flexShrink: 0,
    verticalAlign: 'middle',
  },

  variants: {
    size: {
      xs: {
        width: themeContract.layout.icon.size.xs,
        height: themeContract.layout.icon.size.xs,
      },

      sm: {
        width: themeContract.layout.icon.size.sm,
        height: themeContract.layout.icon.size.sm,
      },

      md: {
        width: themeContract.layout.icon.size.md,
        height: themeContract.layout.icon.size.md,
      },

      lg: {
        width: themeContract.layout.icon.size.lg,
        height: themeContract.layout.icon.size.lg,
      },
    },

    color: {
      default: { color: themeContract.color.text.primary },
      muted: { color: themeContract.color.text.secondary },
      danger: { color: themeContract.color.status.danger },
      warning: { color: themeContract.color.status.warning },
      success: { color: themeContract.color.status.success },
      inherit: { color: 'inherit' },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'inherit',
  },
})
