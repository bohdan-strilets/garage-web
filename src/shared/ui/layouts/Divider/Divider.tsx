import clsx from 'clsx'

import { root } from './Divider.css'

import type { DividerProps } from './Props'

const Divider = ({ orientation, tone, inset, className }: DividerProps) => {
  return <hr className={clsx(root({ orientation, tone, inset }), className)} />
}

export default Divider
