import { Controller, type FieldValues } from 'react-hook-form';

import { FieldError } from '../FieldError';
import { FieldWrapper, HelperText, LabelRow } from '../FormFieldInput';
import { Label } from '../Label';
import { PasswordInput } from '../PasswordInput';
import type { FormFieldPasswordProps } from './FormFieldPassword.types';

export const FormFieldPassword = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder = '••••••••',
  required,
  helperText,
  autoComplete = 'current-password',
}: FormFieldPasswordProps<TFieldValues>) => {
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

          <PasswordInput
            id={fieldId}
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
