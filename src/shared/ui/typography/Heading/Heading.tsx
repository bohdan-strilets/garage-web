import clsx from 'clsx'

import type { JSX } from 'react'

import { root } from './Heading.css'

import type { HeadingProps } from './Props'

const Heading = ({
  children,
  className,

  level,
  align,
  tone,
}: HeadingProps) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component className={clsx(root({ level, align, tone }), className)}>
      {children}
    </Component>
  )
}

export default Heading
