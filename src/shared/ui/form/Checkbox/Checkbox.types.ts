import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  helperText?: ReactNode;
}

export interface BoxProps {
  $checked?: boolean;
  $disabled?: boolean;
}
