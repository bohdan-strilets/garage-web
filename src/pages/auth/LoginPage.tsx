import { LoginForm } from '@features/auth/login'
import { paths } from '@shared/router'
import { TextLink } from '@shared/ui/controls/TextLink'
import { Divider } from '@shared/ui/layouts/Divider'
import { Stack } from '@shared/ui/layouts/Stack'
import { Heading } from '@shared/ui/typography/Heading'
import { Paragraph } from '@shared/ui/typography/Paragraph'

const LoginPage = () => {
  return (
    <Stack gap="lg">
      <Heading level={1}>Login</Heading>
      <LoginForm />

      <Divider />

      <Paragraph align="center">
        Don’t have an account yet?{' '}
        <TextLink to={paths.AUTH.REGISTER} underline={true}>
          Sign up
        </TextLink>
      </Paragraph>
    </Stack>
  )
}

export default LoginPage
