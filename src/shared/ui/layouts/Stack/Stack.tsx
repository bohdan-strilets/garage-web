import clsx from 'clsx'

import { root } from './Stack.css'

import type { StackProps } from './Props'

const Stack = ({
  as,
  className,
  children,
  direction,
  gap,
  align,
  justify,
  wrap,
}: StackProps) => {
  const Component = as || 'div'

  return (
    <Component
      className={clsx(
        root({
          direction,
          gap,
          align,
          justify,
          wrap,
        }),
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default Stack
