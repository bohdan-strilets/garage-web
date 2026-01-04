import { motionDuration } from '../tokens/duration'
import { motionEasing } from '../tokens/easing'

import type { MotionProps } from 'motion/react'

export const fade = (reduced = false): MotionProps => ({
  initial: { opacity: 0 },

  animate: {
    opacity: 1,
    transition: {
      duration: reduced ? 0 : motionDuration.base / 1000,
      ease: motionEasing.standard,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: reduced ? 0 : motionDuration.fast / 1000,
      ease: motionEasing.standard,
    },
  },
})
