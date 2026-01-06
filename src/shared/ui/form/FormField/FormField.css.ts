import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.space.xs,
})

export const control = style({
  display: 'flex',
  flexDirection: 'column',
})
