import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@shared/ui/controls/Button'
import { Form } from '@shared/ui/form/Form'
import { FormField } from '@shared/ui/form/FormField'
import { TextInput } from '@shared/ui/form/TextInput'

import { useForgotPasswordForm } from '../model/useForgotPasswordForm'
import { ForgotPasswordSchema } from '../schema/forgotPasswordSchema'

import type { ForgotPasswordFormValues } from '../types/ForgotPasswordFormValues'

const ForgotPasswordForm = () => {
  const { onSubmit, isDisabled, isPending, cooldown, isCooldownActive } =
    useForgotPasswordForm()

  const resolver = zodResolver(ForgotPasswordSchema)

  const defaultValues: ForgotPasswordFormValues = {
    email: '',
  }

  return (
    <Form<ForgotPasswordFormValues>
      resolver={resolver}
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
      <FormField<ForgotPasswordFormValues>
        name="email"
        label="Email"
        required={true}
      >
        <TextInput type="email" disabled={isDisabled} />
      </FormField>

      <Button
        type="submit"
        loading={isPending}
        fullWidth={true}
        disabled={isDisabled}
      >
        {isCooldownActive ? `Resend in ${cooldown}` : `Send reset Link`}
      </Button>
    </Form>
  )
}

export default ForgotPasswordForm
