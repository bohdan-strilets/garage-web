import RegisterForm from '@features/auth/register'
import Stack from '@shared/ui/layouts/Stack'
import Surface from '@shared/ui/layouts/Surface'
import Heading from '@shared/ui/typography/Heading'

const RegisterPage = () => {
  return (
    <Surface padding="xl" radius="lg">
      <Stack gap="md">
        <Heading level={1}>Register</Heading>
        <RegisterForm />
      </Stack>
    </Surface>
  )
}

export default RegisterPage
