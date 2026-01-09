import { LoginForm } from '@features/auth/login'
import { Stack } from '@shared/ui/layouts/Stack'
import { Heading } from '@shared/ui/typography/Heading'

const LoginPage = () => {
  return (
    <Stack gap="md">
      <Heading level={1}>Login</Heading>
      <LoginForm />
    </Stack>
  )
}

export default LoginPage
