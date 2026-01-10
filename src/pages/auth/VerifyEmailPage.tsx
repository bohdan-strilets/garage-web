import { Route } from '@app/router/_auth/verify-email'
import {
  VerifyEmailPending,
  VerifyEmailResult,
} from '@features/auth/verify-email'

const VerifyEmailPage = () => {
  const { token } = Route.useSearch()

  if (token) {
    return <VerifyEmailResult token={token} />
  }

  return <VerifyEmailPending />
}

export default VerifyEmailPage
