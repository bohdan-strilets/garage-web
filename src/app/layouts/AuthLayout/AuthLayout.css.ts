import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  display: 'grid',
  placeItems: 'center',

  minHeight: '100vh',
  padding: vars.space.lg,

  backgroundColor: vars.color.surface.canvas,
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: 440,
  maxWidth: vars.layout.container.desktop,
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',

  gap: vars.space.lg,
  width: '100%',
  maxWidth: 440,

  padding: vars.space.xl,

  backgroundColor: vars.color.surface.base,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
})
