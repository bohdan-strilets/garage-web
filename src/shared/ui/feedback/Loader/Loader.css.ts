import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@shared/styles'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const root = recipe({
  base: {
    display: 'inline-block',

    borderStyle: 'solid',
    borderRadius: '50%',
    borderColor: 'transparent',
    borderTopColor: 'currentColor',

    animation: `${spin} 0.8s linear infinite`,
  },

  variants: {
    size: {
      sm: {
        width: 16,
        height: 16,
        borderWidth: 2,
      },
      md: {
        width: 24,
        height: 24,
        borderWidth: 3,
      },
      lg: {
        width: 32,
        height: 32,
        borderWidth: 4,
      },
    },

    tone: {
      primary: {
        color: vars.color.brand.primary,
      },
      muted: {
        color: vars.color.text.muted,
      },
      inverted: {
        color: vars.color.text.inverted,
      },
    },

    inline: {
      true: { verticalAlign: 'middle' },
      false: {},
    },
  },

  defaultVariants: {
    size: 'md',
    tone: 'primary',
    inline: false,
  },
})
