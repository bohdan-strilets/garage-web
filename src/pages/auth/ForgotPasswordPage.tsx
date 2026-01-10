import { ForgotPasswordForm } from '@features/auth/forgot-password'
import { paths } from '@shared/router'
import { TextLink } from '@shared/ui/controls/TextLink'
import { Divider } from '@shared/ui/layouts/Divider'
import { Stack } from '@shared/ui/layouts/Stack'
import { Heading } from '@shared/ui/typography/Heading'
import { Paragraph } from '@shared/ui/typography/Paragraph'

const ForgotPasswordPage = () => {
  return (
    <Stack gap="lg">
      <Heading level={1}>Forgot your password?</Heading>
      <Paragraph align="center">
        Enter your email address and we’ll send you a link to reset your
        password.
      </Paragraph>

      <ForgotPasswordForm />

      <Divider />

      <Paragraph align="center" size="sm">
        Please check your spam folder if you don’t see the email.
      </Paragraph>

      <Paragraph align="center">
        Back to{' '}
        <TextLink to={paths.AUTH.LOGIN} underline={true}>
          Login
        </TextLink>
      </Paragraph>
    </Stack>
  )
}

export default ForgotPasswordPage
