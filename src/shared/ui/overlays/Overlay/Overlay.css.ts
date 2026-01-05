import { style } from '@vanilla-extract/css'

import { themeContract } from '@shared/styles'

export const root = style({
  position: 'fixed',
  inset: 0,
  zIndex: themeContract.zIndex.overlay,

  backgroundColor: themeContract.overlay.base,
  cursor: 'pointer',
  pointerEvents: 'auto',
})
