import clsx from 'clsx'

import RequiredMark from '@shared/ui/status/RequiredMark'

import Paragraph from '../Paragraph'

import { root } from './Label.css'

import type { LabelProps } from './Props'

const Label = ({
  htmlFor,
  children,
  isRequired = false,
  className,
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={clsx(root, className)}>
      <Paragraph weight="medium" size="sm" lineHeight="tight">
        {children} {isRequired && <RequiredMark />}
      </Paragraph>
    </label>
  )
}

export default Label
