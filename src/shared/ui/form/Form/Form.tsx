import { FormProvider, useForm, type FieldValues } from 'react-hook-form'

import { Stack } from '@shared/ui/layouts/Stack'

import type { FormProps } from './Props'

const Form = <T extends FieldValues>({
  onSubmit,
  children,
  className,
  ...formOptions
}: FormProps<T>) => {
  const methods = useForm<T>(formOptions)

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(values => onSubmit(values, methods))}
        noValidate
        aria-busy={methods.formState.isSubmitting}
      >
        <Stack gap="sm">{children}</Stack>
      </form>
    </FormProvider>
  )
}

export default Form
