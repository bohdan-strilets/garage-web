import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  display: 'grid',
  placeItems: 'center',

  minHeight: '100vh',
  padding: themeContract.space.lg,

  backgroundColor: themeContract.color.surface.canvas,
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: 440,
  maxWidth: themeContract.layout.container.desktop,
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',

  gap: themeContract.space.lg,
  width: '100%',
  maxWidth: 440,

  padding: themeContract.space.xl,

  backgroundColor: themeContract.color.surface.base,
  borderRadius: themeContract.radius.lg,
  boxShadow: themeContract.shadow.md,
})
