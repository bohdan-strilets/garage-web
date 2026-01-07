import { style } from '@vanilla-extract/css'

import { vars } from '@shared/styles'

export const root = style({
  position: 'fixed',
  inset: 0,
  zIndex: vars.zIndex.overlay,

  backgroundColor: vars.overlay.base,
  cursor: 'pointer',
  pointerEvents: 'auto',
})
