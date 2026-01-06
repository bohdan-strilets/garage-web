import clsx from 'clsx'

import Paragraph from '../Paragraph'

import type { ErrorMessageProps } from './Props'

const ErrorMessage = ({ children, className }: ErrorMessageProps) => {
  return (
    <Paragraph
      size="xs"
      tone="danger"
      className={clsx(className)}
      role="alert"
      aria-live="polite"
    >
      {children}
    </Paragraph>
  )
}

export default ErrorMessage
