import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const mark = style({
  color: vars.color.status.danger,
  fontWeight: 600,
})
