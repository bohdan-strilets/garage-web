import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@shared/ui/controls/Button'
import { Form } from '@shared/ui/form/Form'
import { FormField } from '@shared/ui/form/FormField'
import { PasswordInput } from '@shared/ui/form/PasswordInput'
import { TextInput } from '@shared/ui/form/TextInput'

import { LoginFormSchema } from '../model/loginFormSchema'
import { useLogin } from '../model/useLogin'
import { useLoginFormSubmit } from '../model/useLoginFormSubmit'

import type { LoginFormValues } from '../types/LoginFormValues'

const LoginForm = () => {
  const mutation = useLogin()
  const resolver = zodResolver(LoginFormSchema)
  const onSubmit = useLoginFormSubmit(mutation)

  return (
    <Form<LoginFormValues> resolver={resolver} onSubmit={onSubmit}>
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

      <Button type="submit" loading={mutation.isPending} fullWidth={true}>
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm
