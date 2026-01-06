import clsx from 'clsx'
import { Children, cloneElement, isValidElement } from 'react'
import { Controller, useFormContext, type FieldValues } from 'react-hook-form'

import ErrorMessage from '@shared/ui/typography/ErrorMessage'
import Label from '@shared/ui/typography/Label'

import { root } from './FormField.css'

import type { FormFieldProps } from './Props'

const FormField = <T extends FieldValues>({
  name,
  label,
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

        const controlEl = cloneElement(child, { ...field })

        return (
          <div className={clsx(root, className)}>
            {label && <Label isRequired={required}>{label}</Label>}

            {controlEl}

            {fieldError && <ErrorMessage>{fieldError}</ErrorMessage>}
          </div>
        )
      }}
    />
  )
}

export default FormField
