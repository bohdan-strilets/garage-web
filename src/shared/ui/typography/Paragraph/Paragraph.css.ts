import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    fontFamily: vars.font.family.base,
    lineHeight: vars.font.lineHeight.normal,
    margin: 0,
  },

  variants: {
    size: {
      xs: { fontSize: vars.font.size.xs },
      sm: { fontSize: vars.font.size.sm },
      md: { fontSize: vars.font.size.md },
      lg: { fontSize: vars.font.size.lg },
    },

    tone: {
      primary: { color: vars.color.text.primary },
      secondary: { color: vars.color.text.secondary },
      muted: { color: vars.color.text.muted },
      inverted: { color: vars.color.text.inverted },
      onAccent: { color: vars.color.text.onAccent },
      success: { color: vars.color.status.success },
      danger: { color: vars.color.status.danger },
      warning: { color: vars.color.status.warning },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    weight: {
      regular: { fontWeight: vars.font.weight.regular },
      medium: { fontWeight: vars.font.weight.medium },
      bold: { fontWeight: vars.font.weight.bold },
    },

    lineHeight: {
      normal: { lineHeight: vars.font.lineHeight.normal },
      relaxed: { lineHeight: vars.font.lineHeight.relaxed },
      tight: { lineHeight: vars.font.lineHeight.tight },
    },
  },

  defaultVariants: {
    size: 'md',
    tone: 'primary',
    align: 'left',
    weight: 'regular',
  },
})
