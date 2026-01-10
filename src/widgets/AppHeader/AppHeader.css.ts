import { style } from '@vanilla-extract/css'

import { media } from '@shared/lib/responsive'

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  '@media': {
    [media.LAPTOP]: {
      justifyContent: 'flex-end',
    },
  },
})
