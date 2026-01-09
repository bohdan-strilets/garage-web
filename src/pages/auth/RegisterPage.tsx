import { RegisterForm } from '@features/auth/register'
import { Stack } from '@shared/ui/layouts/Stack'
import { Heading } from '@shared/ui/typography/Heading'

const RegisterPage = () => {
  return (
    <Stack gap="md">
      <Heading level={1}>Register</Heading>
      <RegisterForm />
    </Stack>
  )
}

export default RegisterPage
