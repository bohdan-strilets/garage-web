import { sessionSelectors } from '@entities/session'
import { Button } from '@shared/ui/controls/Button'
import { Divider } from '@shared/ui/layouts/Divider'
import { Stack } from '@shared/ui/layouts/Stack'
import { Heading } from '@shared/ui/typography/Heading'
import { Paragraph } from '@shared/ui/typography/Paragraph'

import { useCooldown } from '../model/useCooldown'
import { useResendVerification } from '../model/useResendVerification'

const VerifyEmailView = () => {
  const { mutate, isPending, isSuccess } = useResendVerification()
  const { cooldown, startCooldown, isCooldownActive } = useCooldown()
  const user = sessionSelectors.getUser()

  const RESEND_COOLDOWN = 15

  const handleResend = () => {
    mutate()
    startCooldown(RESEND_COOLDOWN)
  }

  const isButtonDisabled = isPending || cooldown > 0

  return (
    <Stack gap="md">
      <Heading level={1} align="center">
        Welcome, {user?.profile.firstName}!
      </Heading>

      <Paragraph align="center">
        Your account has been successfully created.
      </Paragraph>

      <Paragraph align="center">
        We’ve sent a verification link to your email address.
      </Paragraph>

      <Paragraph align="center" weight="bold" tone="success">
        {user?.email}
      </Paragraph>

      <Paragraph align="center">
        Please check your inbox and follow the link to activate your account.
      </Paragraph>

      <Divider />

      <Paragraph align="center" tone="secondary">
        If you don’t see the email, check your spam folder or resend it below.
      </Paragraph>

      <Button
        onClick={handleResend}
        loading={isPending}
        fullWidth
        disabled={isButtonDisabled}
      >
        {isCooldownActive ? `Resend available in ${cooldown}s` : 'Resend email'}
      </Button>

      {isSuccess && cooldown === RESEND_COOLDOWN && (
        <Paragraph tone="success" align="center">
          Verification email has been sent again.
        </Paragraph>
      )}
    </Stack>
  )
}

export default VerifyEmailView
