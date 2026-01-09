import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

import { disabled, focusable, hoverable } from '@shared/styles'

import { root } from './TextLink.css'

import type { TextLinkProps } from './Props'

const TextLink = ({
  to,
  children,
  className,
  underline,
  tone,
  ...props
}: TextLinkProps) => {
  return (
    <Link
      to={to}
      {...props}
      className={clsx(
        root({ underline, tone }),
        focusable,
        hoverable,
        disabled,
        className,
      )}
    >
      {children}
    </Link>
  )
}

export default TextLink
