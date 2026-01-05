import { style } from '@vanilla-extract/css'

import { interaction } from '../tokens/interaction'

export const disabled = style({
  selectors: {
    '&:disabled, &[aria-disabled="true"]': {
      opacity: interaction.disabledOpacity,
      pointerEvents: 'none',
    },
  },
})
