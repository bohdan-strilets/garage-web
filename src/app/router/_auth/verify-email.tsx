import { createFileRoute } from '@tanstack/react-router'

import VerifyEmailPage from '@pages/auth/VerifyEmailPage'

export const Route = createFileRoute('/_auth/verify-email')({
  validateSearch: (search: { token?: string }) => ({
    token: search.token,
  }),

  component: VerifyEmailPage,
})
