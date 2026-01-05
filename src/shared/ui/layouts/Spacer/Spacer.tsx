import clsx from 'clsx'

import { root } from './Spacer.css'

import type { SpacerProps } from './Props'

const Spacer = ({ size, grow, axis, className }: SpacerProps) => {
  return (
    <div
      aria-hidden
      className={clsx(root({ size, grow: grow, axis }), className)}
    />
  )
}

export default Spacer
