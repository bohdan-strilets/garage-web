import { font } from './font'
import { layout } from './layout'
import { motion } from './motion'
import { overlay } from './overlay'
import { radius } from './radius'
import { space } from './space'
import { zIndex } from './zIndex'

export const sharedThemeValues = {
  space,
  radius,
  font,
  zIndex,
  layout,
  motion,
  overlay,
} as const
