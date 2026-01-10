import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@shared/ui/controls/Button'
import { Form } from '@shared/ui/form/Form'
import { FormField } from '@shared/ui/form/FormField'
import { FormRootError } from '@shared/ui/form/FormRootError'
import { PasswordInput } from '@shared/ui/form/PasswordInput'
import { TextInput } from '@shared/ui/form/TextInput'

import { useLogin } from '../model/useLogin'
import { useLoginFormSubmit } from '../model/useLoginFormSubmit'
import { LoginFormSchema } from '../schema/loginFormSchema'

import type { LoginFormValues } from '../types/LoginFormValues'

const LoginForm = () => {
  const mutation = useLogin()
  const resolver = zodResolver(LoginFormSchema)
  const onSubmit = useLoginFormSubmit(mutation)

  const defaultValues: LoginFormValues = {
    email: '',
    password: '',
  }

  return (
    <Form<LoginFormValues>
      resolver={resolver}
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
      <FormField<LoginFormValues> name="email" label="Email" required={true}>
        <TextInput type="email" />
      </FormField>

      <FormField<LoginFormValues>
        name="password"
        label="Password"
        required={true}
      >
        <PasswordInput />
      </FormField>

      <FormRootError />

      <Button type="submit" loading={mutation.isPending} fullWidth={true}>
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm
