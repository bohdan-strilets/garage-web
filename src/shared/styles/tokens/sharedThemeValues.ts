import { font } from './font'
import { layout } from './layout'
import { motion } from './motion'
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
} as const
