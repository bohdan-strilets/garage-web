import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  flex: 1,
  overflowY: 'auto',
  padding: themeContract.space.md,
})
