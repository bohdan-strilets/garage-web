import clsx from 'clsx'

import { useId } from 'react'

import { disabled, focusable, hoverable } from '@shared/styles'
import { Icon } from '@shared/ui/controls/Icon'

import { useDropdown } from './model/useDropdown'
import {
  root,
  trigger,
  dropdown,
  value,
  placeholder,
  optionBtn,
  checkIcon,
} from './Select.css'

import type { SelectProps } from './types/Props'

const Select = ({
  value: selected,
  onChange,
  options,
  placeholder: placeholderText = 'Select…',
  disabled: isDisabled,
  className,
}: SelectProps) => {
  const { closeDropdown, toggleDropdown, open, ref } = useDropdown({
    disabled: isDisabled,
  })

  const selectedOption = options.find(state => state.value === selected)

  const valueId = useId()
  const listboxId = useId()

  return (
    <div ref={ref} className={clsx(root, className)}>
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-labelledby={valueId}
        className={clsx(trigger, hoverable, disabled, focusable)}
        disabled={isDisabled}
        onClick={toggleDropdown}
      >
        <span
          id={valueId}
          className={clsx(selectedOption ? value : placeholder)}
        >
          {selectedOption?.label ?? placeholderText}
        </span>

        <span>
          <Icon name={open ? 'arrowUp' : 'arrowDown'} />
        </span>
      </button>

      {open && (
        <ul id={listboxId} role="listbox" className={dropdown}>
          {options.map(option => {
            const isSelected = option.value === selected
            const handleClick = () => {
              if (option.disabled) return
              onChange?.(option.value)
              closeDropdown()
            }

            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  className={clsx(
                    optionBtn({ selected: isSelected }),
                    disabled,
                    focusable,
                  )}
                  disabled={option.disabled}
                  onClick={handleClick}
                >
                  {option.label}
                  <Icon
                    name="check"
                    className={checkIcon({ visible: isSelected })}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Select
