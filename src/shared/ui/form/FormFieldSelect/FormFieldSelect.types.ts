import type { ReactNode } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

import type { SelectOption } from '../Select';

export interface FormFieldSelectProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: ReactNode;
  options: SelectOption[];
}
