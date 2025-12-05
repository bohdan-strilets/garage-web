import { forwardRef } from 'react';

import { StyledInput } from './Input.styles';
import type { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ invalid, fullWidth = true, ...rest }, ref) => {
    return <StyledInput ref={ref} $invalid={invalid} $fullWidth={fullWidth} {...rest} />;
  },
);

Input.displayName = 'Input';
