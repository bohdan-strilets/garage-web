import { style } from '@vanilla-extract/css'

import { interaction } from '../tokens/interaction'

export const pressable = style({
  selectors: {
    '&:not(:disabled):active': {
      transform: `scale(${interaction.active.scale})`,
    },
  },
})
