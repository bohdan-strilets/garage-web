import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  fullWidth?: boolean;
}

export interface InputStyleProps {
  $invalid?: boolean;
  $fullWidth?: boolean;
}
