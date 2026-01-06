import clsx from 'clsx'
import { forwardRef } from 'react'

import { disabled, focusable, hoverable } from '@shared/styles'

import { root } from './TextInput.css'

import type { TextInputProps } from './Props'

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(root, hoverable, disabled, focusable, className)}
        {...props}
      />
    )
  },
)

TextInput.displayName = 'TextInput'
export default TextInput
