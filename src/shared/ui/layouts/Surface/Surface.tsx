import clsx from 'clsx'

import { root } from './Surface.css'

import type { SurfaceProps } from './Props'

const Surface = ({
  children,
  className,
  tone,
  shadow,
  radius,
  padding,
}: SurfaceProps) => {
  return (
    <div
      className={clsx(
        root({
          tone,
          shadow,
          radius,
          padding,
        }),
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Surface
