import { createFileRoute } from '@tanstack/react-router'

import VerifyEmailPage from '@pages/auth/VerifyEmailPage'

export const Route = createFileRoute('/auth/verify-email')({
  validateSearch: (search: { token?: string }) => ({
    token: search.token,
  }),

  component: VerifyEmailPage,
})
