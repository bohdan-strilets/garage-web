import clsx from 'clsx'

import { disabled, focusable, hoverable, pressable } from '@shared/styles'
import { Loader } from '@shared/ui/feedback/Loader'

import { root } from './Button.css'

import type { ButtonProps } from './Props'

const Button = ({
  children,
  className,

  variant,
  size,
  fullWidth,

  loading = false,
  disabled: isDisabled,
  type = 'button',
  ...props
}: ButtonProps) => {
  const notActive = isDisabled || loading

  return (
    <button
      type={type}
      disabled={notActive}
      className={clsx(
        root({ variant, size, fullWidth }),
        focusable,
        hoverable,
        pressable,
        disabled,
        className,
      )}
      {...props}
      aria-busy={loading}
      aria-disabled={notActive}
    >
      {children}
      {loading && (
        <span aria-hidden="true">
          <Loader tone="muted" size="sm" />
        </span>
      )}
    </button>
  )
}

export default Button
