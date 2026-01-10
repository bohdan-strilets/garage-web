import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  minHeight: '100vh',
  padding: vars.space.lg,

  backgroundColor: vars.color.surface.canvas,
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: vars.layout.authContainer.maxWidth,
})

export const main = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,

  width: '100%',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',

  gap: vars.space.lg,
  width: '100%',
  maxWidth: vars.layout.authContainer.maxWidth,
  padding: vars.space.xl,

  backgroundColor: vars.color.surface.base,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
})

export const footer = style({
  width: '100%',
  maxWidth: vars.layout.authContainer.maxWidth,
  marginTop: vars.space.lg,
})
