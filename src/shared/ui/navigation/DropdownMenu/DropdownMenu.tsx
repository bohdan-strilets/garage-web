import clsx from 'clsx'

import { useDropdown } from '@shared/hooks/dropdwon/useDropdown'
import { disabled, focusable, hoverable } from '@shared/styles'

import { menu, root, triggerButton } from './DropdownMenu.css'

import type { DropdownMenuProps } from './Props'

const DropdownMenu = ({
  trigger,
  children,
  className,
  disabled: isDisabled,
}: DropdownMenuProps) => {
  const { open, toggleDropdown, closeDropdown, ref } = useDropdown({
    disabled: isDisabled,
  })

  return (
    <div ref={ref} className={clsx(root, className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggleDropdown}
        className={clsx(triggerButton, focusable, hoverable, disabled)}
        disabled={isDisabled}
      >
        {trigger}
      </button>

      {open && (
        <div role="menu" className={menu}>
          {typeof children === 'function'
            ? children({ close: closeDropdown })
            : children}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
