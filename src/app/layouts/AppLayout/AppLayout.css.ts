import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  position: 'relative',

  display: 'flex',

  maxWidth: vars.layout.container.desktop,
  minHeight: '100vh',
  marginInline: 'auto',

  backgroundColor: vars.color.surface.canvas,
  overflow: 'hidden',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})
