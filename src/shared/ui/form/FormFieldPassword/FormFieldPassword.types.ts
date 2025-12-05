import type { ReactNode } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface FormFieldPasswordProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: ReactNode;
  autoComplete?: string;
}
