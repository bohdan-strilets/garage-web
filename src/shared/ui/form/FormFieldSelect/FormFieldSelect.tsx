import { Controller } from 'react-hook-form';

import { FieldError } from '../FieldError';
import { Label } from '../Label';
import { Select } from '../Select';
import { FieldWrapper, HelperText, LabelRow } from './FormFieldSelect.styles';
import type { FormFieldSelectProps } from './FormFieldSelect.types';

export const FormFieldSelect = <TFieldValues extends Record<string, unknown>>({
  name,
  control,
  label,
  placeholder,
  required,
  helperText,
  options,
}: FormFieldSelectProps<TFieldValues>) => {
  const fieldId = `field-${name}`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FieldWrapper>
          {(label || helperText) && (
            <LabelRow>
              {label && (
                <Label htmlFor={fieldId} required={required}>
                  {label}
                </Label>
              )}
              {helperText && <HelperText>{helperText}</HelperText>}
            </LabelRow>
          )}

          <Select
            value={(field.value as string) ?? null}
            onChange={field.onChange}
            options={options}
            placeholder={placeholder}
            invalid={!!fieldState.error}
          />

          <FieldError message={fieldState.error?.message} />
        </FieldWrapper>
      )}
    />
  );
};
