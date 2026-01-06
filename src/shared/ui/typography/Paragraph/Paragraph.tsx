import clsx from 'clsx'

import { root } from './Paragraph.css'

import type { ParagraphProps } from './Props'

const Paragraph = ({
  children,
  className,

  size,
  tone,
  align,
  weight,
  lineHeight,
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        root({ size, tone, align, weight, lineHeight }),
        className,
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
