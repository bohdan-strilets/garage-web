import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  position: 'relative',

  display: 'flex',

  maxWidth: themeContract.layout.container.desktop,
  minHeight: '100vh',
  marginInline: 'auto',

  backgroundColor: themeContract.color.surface.canvas,
  overflow: 'hidden',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})
