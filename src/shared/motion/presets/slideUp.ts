import { motionDuration } from '../tokens/duration'
import { motionEasing } from '../tokens/easing'

import type { MotionProps } from 'motion/react'

export const slideUp = (reduced = false): MotionProps => ({
  initial: { opacity: 0, y: 8 },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0 : motionDuration.base / 1000,
      ease: motionEasing.standard,
    },
  },

  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: reduced ? 0 : motionDuration.fast / 1000,
      ease: motionEasing.standard,
    },
  },
})
