import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: themeContract.space.xs,

    fontFamily: themeContract.font.family.base,
    fontWeight: themeContract.font.weight.medium,
    lineHeight: themeContract.font.lineHeight.normal,

    borderRadius: themeContract.radius.md,
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: themeContract.color.brand.primary,
        color: themeContract.color.text.onAccent,
      },

      secondary: {
        backgroundColor: themeContract.color.surface.muted,
        color: themeContract.color.text.primary,
      },

      ghost: {
        backgroundColor: 'transparent',
        color: themeContract.color.text.primary,
      },

      inverted: {
        backgroundColor: themeContract.color.surface.inverted,
        color: themeContract.color.text.inverted,
      },
    },

    size: {
      sm: {
        height: themeContract.layout.input.height.sm,
        paddingInline: themeContract.space.md,
        fontSize: themeContract.font.size.sm,
      },

      md: {
        height: themeContract.layout.input.height.md,
        paddingInline: themeContract.space.lg,
        fontSize: themeContract.font.size.md,
      },

      lg: {
        height: themeContract.layout.input.height.lg,
        paddingInline: themeContract.space.xl,
        fontSize: themeContract.font.size.md,
      },
    },

    fullWidth: {
      true: { width: '100%' },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
