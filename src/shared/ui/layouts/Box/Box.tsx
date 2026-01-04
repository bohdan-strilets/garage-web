import clsx from 'clsx'

import { root } from './Box.css'

import type { BoxProps } from './Props'

const Box = ({
  children,
  as,
  className,

  display,
  flexDirection,
  justify,
  align,
  gap,
  padding,
  paddingX,
  paddingY,
  margin,

  position,
}: BoxProps) => {
  const Component = as || 'div'

  return (
    <Component
      className={clsx(
        root({
          position,
          display,
          flexDirection,
          justify,
          align,
          gap,
          padding,
          paddingX,
          paddingY,
          margin,
        }),
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default Box
