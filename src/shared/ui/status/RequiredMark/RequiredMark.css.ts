import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const mark = style({
  color: themeContract.color.status.danger,
  fontWeight: 600,
})
