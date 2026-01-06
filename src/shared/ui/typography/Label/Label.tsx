import clsx from 'clsx'

import Paragraph from '../Paragraph'

import { root } from './Label.css'

import type { LabelProps } from './Props'

const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={clsx(root, className)}>
      <Paragraph weight="medium" size="sm" lineHeight="tight">
        {children}
      </Paragraph>
    </label>
  )
}

export default Label
