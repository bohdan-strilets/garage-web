import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.space.sm,
})
