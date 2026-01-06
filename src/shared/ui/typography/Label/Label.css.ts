import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: themeContract.space.xs,

  cursor: 'pointer',
})
