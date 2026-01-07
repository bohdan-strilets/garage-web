import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  width: '100%',
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
})
