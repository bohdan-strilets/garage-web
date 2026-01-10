import { useSearch } from '@tanstack/react-router'

import {
  VerifyEmailPending,
  VerifyEmailResult,
} from '@features/auth/verify-email'
import { paths } from '@shared/router'

const VerifyEmailPage = () => {
  const { token } = useSearch({ from: paths.AUTH.VERIFY_EMAIL })

  if (token) {
    return <VerifyEmailResult token={token} />
  }

  return <VerifyEmailPending />
}

export default VerifyEmailPage
