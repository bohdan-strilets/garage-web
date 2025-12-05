import { Controller, type FieldValues } from 'react-hook-form';

import { FieldError } from '../FieldError';
import { Input } from '../Input';
import { Label } from '../Label';
import { FieldWrapper, HelperText, LabelRow } from './FormFieldInput.styles';
import type { FormFieldInputProps } from './FormFieldInput.types';

export const FormFieldInput = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  required,
  helperText,
  autoComplete,
}: FormFieldInputProps<TFieldValues>) => {
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

          <Input
            id={fieldId}
            type={type}
            placeholder={placeholder}
            invalid={!!fieldState.error}
            autoComplete={autoComplete}
            {...field}
          />

          <FieldError message={fieldState.error?.message} />
        </FieldWrapper>
      )}
    />
  );
};
