import clsx from 'clsx'

import { focusable, disabled, hoverable } from '@shared/styles'

import { item } from './DropdownMenuItem.css'

import type { DropdownMenuItemProps } from './Props'

const DropdownMenuItem = ({
  children,
  onClick,
  disabled: isDisabled,
  danger,
}: DropdownMenuItemProps) => {
  return (
    <button
      type="button"
      role="menuitem"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={onClick}
      className={clsx(item({ danger }), focusable, hoverable, disabled)}
    >
      {children}
    </button>
  )
}

export default DropdownMenuItem
