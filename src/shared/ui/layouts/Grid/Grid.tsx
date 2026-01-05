import clsx from 'clsx'

import { root } from './Grid.css'

import type { GridProps } from './Props'

const Grid = ({
  className,
  children,
  columns,
  rows,
  gap,
  align,
  justify,
}: GridProps) => {
  return (
    <div
      style={{ gridTemplateColumns: columns, gridTemplateRows: rows }}
      className={clsx(root({ gap, align, justify }), className)}
    >
      {children}
    </div>
  )
}

export default Grid
