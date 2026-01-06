import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const item = style({
  width: '100%',
  height: themeContract.layout.input.height.lg,
})

export const link = style({
  display: 'flex',
  alignItems: 'center',

  borderRadius: themeContract.radius.md,

  paddingInline: themeContract.space.md,
  width: '100%',
  height: '100%',
  gap: themeContract.space.md,
})

export const active = style({
  background: themeContract.color.brand.primarySoft,
})
