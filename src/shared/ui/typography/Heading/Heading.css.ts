import { recipe } from '@vanilla-extract/recipes'

import { themeContract } from '@shared/styles'

export const root = recipe({
  base: {
    fontFamily: themeContract.font.family.base,
    fontWeight: themeContract.font.weight.bold,
    margin: 0,
  },

  variants: {
    level: {
      1: { fontSize: themeContract.font.size.xl },
      2: { fontSize: themeContract.font.size.lg },
      3: { fontSize: themeContract.font.size.md },
      4: { fontSize: themeContract.font.size.sm },
      5: { fontSize: themeContract.font.size.xs },
      6: { fontSize: themeContract.font.size.xs },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    tone: {
      primary: { color: themeContract.color.text.primary },
      secondary: { color: themeContract.color.text.secondary },
      muted: { color: themeContract.color.text.muted },
    },
  },

  defaultVariants: {
    align: 'left',
    tone: 'primary',
  },
})
