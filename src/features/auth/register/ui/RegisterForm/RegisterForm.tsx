import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@shared/ui/controls/Button'
import Form from '@shared/ui/form/Form'
import FormField from '@shared/ui/form/FormField'
import PasswordInput from '@shared/ui/form/PasswordInput'
import TextInput from '@shared/ui/form/TextInput'

import { RegisterFormSchema } from '../../model/registerFormSchema'
import { useRegister } from '../../model/useRegister'
import { useRegisterFormSubmit } from '../../model/useRegisterFormSubmit'

import type { RegisterFormValues } from '../../types/RegisterFormValues'

const RegisterForm = () => {
  const { isPending } = useRegister()
  const resolver = zodResolver(RegisterFormSchema)
  const onSubmit = useRegisterFormSubmit()

  return (
    <Form<RegisterFormValues> resolver={resolver} onSubmit={onSubmit}>
      <FormField<RegisterFormValues>
        name="firstName"
        label="First name"
        required
      >
        <TextInput />
      </FormField>

      <FormField<RegisterFormValues> name="lastName" label="Last name" required>
        <TextInput />
      </FormField>

      <FormField<RegisterFormValues> name="email" label="Email" required>
        <TextInput type="email" />
      </FormField>

      <FormField<RegisterFormValues> name="password" label="Password" required>
        <PasswordInput />
      </FormField>

      <FormField<RegisterFormValues>
        name="confirmPassword"
        label="Confirm password"
        required
      >
        <PasswordInput />
      </FormField>

      <Button type="submit" loading={isPending} fullWidth={true}>
        Create account
      </Button>
    </Form>
  )
}

export default RegisterForm
