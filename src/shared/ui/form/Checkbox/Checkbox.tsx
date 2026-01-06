import clsx from 'clsx'
import { forwardRef } from 'react'

import { disabled, hoverable } from '@shared/styles'
import Icon from '@shared/ui/controls/Icon'

import { root, input, box, checkmark } from './Checkbox.css'

import type { CheckboxProps } from './Props'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, disabled: isDisabled, ...props }, ref) => {
    return (
      <label className={clsx(root, hoverable, disabled, className)}>
        <input
          ref={ref}
          type="checkbox"
          className={clsx(input)}
          disabled={isDisabled}
          {...props}
        />

        <span className={box}>
          <Icon name="checkmark" className={checkmark} />
        </span>

        {label && <span>{label}</span>}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
export default Checkbox
