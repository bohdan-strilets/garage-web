import type { Control, FieldValues, Path } from 'react-hook-form';

export interface FormFieldCheckboxProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  helperText?: string;
}
