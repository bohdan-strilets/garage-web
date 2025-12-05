import { Controller } from 'react-hook-form';

import { Checkbox, Wrapper } from '../Checkbox';
import { FieldError } from '../FieldError';
import type { FormFieldCheckboxProps } from './FormFieldCheckbox.types';

export const FormFieldCheckbox = <TFieldValues extends Record<string, unknown>>({
  name,
  control,
  label,
  helperText,
}: FormFieldCheckboxProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Wrapper>
          <Checkbox
            checked={field.value as boolean}
            onChange={(event) => field.onChange(event.target.checked)}
            onBlur={field.onBlur}
            name={field.name}
            label={label}
            helperText={helperText}
          />
          <FieldError message={fieldState.error?.message} />
        </Wrapper>
      )}
    />
  );
};
