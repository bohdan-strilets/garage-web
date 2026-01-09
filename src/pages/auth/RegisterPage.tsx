import { RegisterForm } from '@features/auth/register'
import { paths } from '@shared/router'
import { TextLink } from '@shared/ui/controls/TextLink'
import { Divider } from '@shared/ui/layouts/Divider'
import { Stack } from '@shared/ui/layouts/Stack'
import { Heading } from '@shared/ui/typography/Heading'
import { Paragraph } from '@shared/ui/typography/Paragraph'

const RegisterPage = () => {
  return (
    <Stack gap="lg">
      <Heading level={1}>Register</Heading>
      <RegisterForm />

      <Divider />

      <Paragraph align="center">
        Already have an account?{' '}
        <TextLink to={paths.AUTH.LOGIN} underline={true}>
          Log in
        </TextLink>
      </Paragraph>
    </Stack>
  )
}

export default RegisterPage
