import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  flex: 1,
  overflowY: 'auto',
  padding: vars.space.md,
})
