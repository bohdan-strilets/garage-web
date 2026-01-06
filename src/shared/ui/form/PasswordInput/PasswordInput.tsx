import clsx from 'clsx'
import { forwardRef, useState } from 'react'

import { hoverable } from '@shared/styles'
import Icon from '@shared/ui/controls/Icon'

import TextInput from '../TextInput'

import { wrapper, toggle } from './PasswordInput.css'

import type { PasswordInputProps } from './Props'

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = useState(false)

    return (
      <div className={wrapper}>
        <TextInput
          ref={ref}
          type={visible ? 'text' : 'password'}
          className={className}
          {...props}
        />

        <button
          type="button"
          aria-label="Toggle password visibility"
          className={clsx(toggle, hoverable)}
          onClick={() => setVisible(v => !v)}
          tabIndex={-1}
        >
          {visible ? <Icon name="eyeOff" /> : <Icon name="eyeOn" />}
        </button>
      </div>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'
export default PasswordInput
