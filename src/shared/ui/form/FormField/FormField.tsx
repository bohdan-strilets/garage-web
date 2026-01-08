import { Children, cloneElement, isValidElement } from 'react'
import { Controller, useFormContext, type FieldValues } from 'react-hook-form'

import { Stack } from '@shared/ui/layouts/Stack'
import { ErrorMessage } from '@shared/ui/typography/ErrorMessage'
import { HelperText } from '@shared/ui/typography/HelperText'
import { Label } from '@shared/ui/typography/Label'

import type { FormFieldProps } from './Props'

const FormField = <T extends FieldValues>({
  name,
  label,
  helperText,
  required,
  children,
  className,
}: FormFieldProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>()

  const fieldError = errors[name]?.message as string | undefined
  const child = Children.only(children)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        if (!isValidElement(child)) return <div />

        const controlEl = cloneElement(child, {
          ...field,
          value: field.value ?? '',
        })

        return (
          <Stack gap="xs" className={className}>
            {label && <Label isRequired={required}>{label}</Label>}
            {helperText && <HelperText tone="muted">{helperText}</HelperText>}

            {controlEl}

            {fieldError && <ErrorMessage>{fieldError}</ErrorMessage>}
          </Stack>
        )
      }}
    />
  )
}

export default FormField
