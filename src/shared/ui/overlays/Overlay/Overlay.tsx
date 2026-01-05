import { motion, useReducedMotion } from 'motion/react'

import { fade } from '@shared/motion'

import { root } from './Overlay.css'

import type { OverlayProps } from './Props'

const Overlay = ({ open, onClick }: OverlayProps) => {
  const reduced = useReducedMotion()

  if (!open) return null

  return (
    <motion.div
      {...fade(reduced ?? false)}
      className={root}
      onClick={onClick}
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}

export default Overlay
