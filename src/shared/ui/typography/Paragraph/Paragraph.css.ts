import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    fontFamily: themeContract.font.family.base,
    lineHeight: themeContract.font.lineHeight.normal,
    margin: 0,
  },

  variants: {
    size: {
      xs: { fontSize: themeContract.font.size.xs },
      sm: { fontSize: themeContract.font.size.sm },
      md: { fontSize: themeContract.font.size.md },
      lg: { fontSize: themeContract.font.size.lg },
    },

    tone: {
      primary: { color: themeContract.color.text.primary },
      secondary: { color: themeContract.color.text.secondary },
      muted: { color: themeContract.color.text.muted },
      inverted: { color: themeContract.color.text.inverted },
      onAccent: { color: themeContract.color.text.onAccent },
      success: { color: themeContract.color.status.success },
      danger: { color: themeContract.color.status.danger },
      warning: { color: themeContract.color.status.warning },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    weight: {
      regular: { fontWeight: themeContract.font.weight.regular },
      medium: { fontWeight: themeContract.font.weight.medium },
      bold: { fontWeight: themeContract.font.weight.bold },
    },

    lineHeight: {
      normal: { lineHeight: themeContract.font.lineHeight.normal },
      relaxed: { lineHeight: themeContract.font.lineHeight.relaxed },
      tight: { lineHeight: themeContract.font.lineHeight.tight },
    },
  },

  defaultVariants: {
    size: 'md',
    tone: 'primary',
    align: 'left',
    weight: 'regular',
  },
})
