import clsx from 'clsx'

import { root } from './Loader.css'

import type { LoaderProps } from './Props'

const Loader = ({ size, tone, inline, className }: LoaderProps) => {
  return (
    <span
      aria-busy="true"
      aria-live="polite"
      className={clsx(root({ size, tone, inline }), className)}
    />
  )
}

export default Loader
