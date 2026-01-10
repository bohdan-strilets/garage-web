import { useEffect } from 'react'

import { paths } from '@shared/router'
import { Icon } from '@shared/ui/controls/Icon'
import { TextLink } from '@shared/ui/controls/TextLink'
import { Loader } from '@shared/ui/feedback/Loader'
import { Box } from '@shared/ui/layouts/Box'
import { Stack } from '@shared/ui/layouts/Stack'
import { Heading } from '@shared/ui/typography/Heading'
import { Paragraph } from '@shared/ui/typography/Paragraph'

import { useVerification } from '../model/useVerification'

const VerifyEmailResult = ({ token }: { token?: string }) => {
  const { mutate, isPending, isError } = useVerification(token)

  useEffect(() => {
    if (!token) return
    mutate()
  }, [mutate, token])

  if (isPending) {
    return (
      <Stack gap="md">
        <Heading level={1} align="center">
          Email verification in progress…
        </Heading>
        <Paragraph align="center">Please wait a moment.</Paragraph>

        <Box display="flex" justify="center">
          <Loader size="lg" />
        </Box>
      </Stack>
    )
  }

  if (isError) {
    return (
      <Stack gap="md">
        <Heading level={1} align="center">
          Email verification failed
        </Heading>
        <Paragraph align="center">
          This link is invalid or has expired.
        </Paragraph>

        <Box display="flex" justify="center">
          <Icon name="error" size="lg" color="danger" />
        </Box>

        <Paragraph align="center" tone="muted" size="sm">
          Go to <TextLink to={paths.AUTH.LOGIN}>login</TextLink>
        </Paragraph>
      </Stack>
    )
  }

  return (
    <Stack gap="md">
      <Heading level={1} align="center">
        Email verified
      </Heading>
      <Paragraph align="center">
        Your account has been successfully activated.
      </Paragraph>

      <Box display="flex" justify="center">
        <Icon name="success" size="lg" color="success" />
      </Box>

      <Paragraph align="center" tone="muted" size="sm">
        Go to your <TextLink to={paths.APP.DASHBOARD.ROOT}>dashboard</TextLink>{' '}
        to start using your account.
      </Paragraph>
    </Stack>
  )
}

export default VerifyEmailResult
