import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  display: 'flex',
  alignItems: 'center',

  flexShrink: 0,
  height: themeContract.layout.header.height,

  backgroundColor: themeContract.color.surface.base,
  borderBottom: `1px solid ${themeContract.color.border.subtle}`,
  boxShadow: themeContract.shadow.md,
})
