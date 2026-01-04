import { motionDuration } from '../tokens/duration'
import { motionEasing } from '../tokens/easing'

import type { MotionProps } from 'motion/react'

export const scale = (reduced = false): MotionProps => ({
  initial: {
    opacity: 0,
    scale: 0.96,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: reduced ? 0 : motionDuration.base / 1000,
      ease: motionEasing.emphasized,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: reduced ? 0 : motionDuration.fast / 1000,
      ease: motionEasing.standard,
    },
  },
})
