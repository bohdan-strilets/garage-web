import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space.xs,

    fontFamily: vars.font.family.base,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.lineHeight.normal,

    borderRadius: vars.radius.md,
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.brand.primary,
        color: vars.color.text.onAccent,
      },

      secondary: {
        backgroundColor: vars.color.surface.muted,
        color: vars.color.text.primary,
      },

      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.text.primary,
      },

      inverted: {
        backgroundColor: vars.color.surface.inverted,
        color: vars.color.text.inverted,
      },
    },

    size: {
      sm: {
        height: vars.layout.input.size.sm,
        paddingInline: vars.space.md,
        fontSize: vars.font.size.sm,
      },

      md: {
        height: vars.layout.input.size.md,
        paddingInline: vars.space.lg,
        fontSize: vars.font.size.md,
      },

      lg: {
        height: vars.layout.input.size.lg,
        paddingInline: vars.space.xl,
        fontSize: vars.font.size.md,
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
