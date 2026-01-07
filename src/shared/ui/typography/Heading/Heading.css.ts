import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

export const root = recipe({
  base: {
    fontFamily: vars.font.family.base,
    fontWeight: vars.font.weight.bold,
    margin: 0,
  },

  variants: {
    level: {
      1: { fontSize: vars.font.size.xl },
      2: { fontSize: vars.font.size.lg },
      3: { fontSize: vars.font.size.md },
      4: { fontSize: vars.font.size.sm },
      5: { fontSize: vars.font.size.xs },
      6: { fontSize: vars.font.size.xs },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    tone: {
      primary: { color: vars.color.text.primary },
      secondary: { color: vars.color.text.secondary },
      muted: { color: vars.color.text.muted },
    },
  },

  defaultVariants: {
    align: 'left',
    tone: 'primary',
  },
})
