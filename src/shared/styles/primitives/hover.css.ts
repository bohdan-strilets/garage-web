import { style } from '@vanilla-extract/css'

import { interaction } from '../tokens/interaction'

export const hoverable = style({
  transition: interaction.hover.transition,

  selectors: {
    '&:not(:disabled):hover': {
      opacity: interaction.hover.opacity,
    },
  },
})
