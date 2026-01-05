import clsx from 'clsx'

import { root } from './Paragraph.css'

import type { ParagraphProps } from './Props'

const Paragraph = ({
  children,
  as,
  className,

  size,
  tone,
  align,
  weight,
}: ParagraphProps) => {
  const Component = as || 'p'

  return (
    <Component className={clsx(root({ size, tone, align, weight }), className)}>
      {children}
    </Component>
  )
}

export default Paragraph
