import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.xs,

  cursor: 'pointer',
})
