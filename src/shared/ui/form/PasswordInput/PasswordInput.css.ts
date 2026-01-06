import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const wrapper = style({
  position: 'relative',
  width: '100%',
})

export const toggle = style({
  position: 'absolute',
  top: '50%',
  right: themeContract.space.md,
  transform: 'translateY(-50%)',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: themeContract.layout.input.height.sm,
  width: themeContract.layout.input.height.sm,
  borderRadius: themeContract.radius.sm,

  color: themeContract.color.text.muted,
  cursor: 'pointer',
})
