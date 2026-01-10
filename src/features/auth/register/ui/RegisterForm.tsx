import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@shared/ui/controls/Button'
import { Form } from '@shared/ui/form/Form'
import { FormField } from '@shared/ui/form/FormField'
import { FormRootError } from '@shared/ui/form/FormRootError'
import { PasswordInput } from '@shared/ui/form/PasswordInput'
import { TextInput } from '@shared/ui/form/TextInput'

import { useRegister } from '../model/useRegister'
import { useRegisterFormSubmit } from '../model/useRegisterFormSubmit'
import { RegisterFormSchema } from '../schema/registerFormSchema'

import type { RegisterFormValues } from '../types/RegisterFormValues'

const RegisterForm = () => {
  const mutation = useRegister()
  const resolver = zodResolver(RegisterFormSchema)
  const onSubmit = useRegisterFormSubmit(mutation)

  const defaultValues: RegisterFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <Form<RegisterFormValues>
      resolver={resolver}
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
      <FormField<RegisterFormValues>
        name="firstName"
        label="First name"
        required={true}
      >
        <TextInput />
      </FormField>

      <FormField<RegisterFormValues>
        name="lastName"
        label="Last name"
        required={true}
      >
        <TextInput />
      </FormField>

      <FormField<RegisterFormValues> name="email" label="Email" required={true}>
        <TextInput type="email" />
      </FormField>

      <FormField<RegisterFormValues>
        name="password"
        label="Password"
        required={true}
        helperText="Password must be at least 8 characters and include uppercase and lowercase letters, numbers, and at least one special character."
      >
        <PasswordInput />
      </FormField>

      <FormField<RegisterFormValues>
        name="confirmPassword"
        label="Confirm password"
        required={true}
      >
        <PasswordInput />
      </FormField>

      <FormRootError />

      <Button type="submit" loading={mutation.isPending} fullWidth={true}>
        Create account
      </Button>
    </Form>
  )
}

export default RegisterForm
