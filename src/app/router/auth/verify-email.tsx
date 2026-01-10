import { createFileRoute } from '@tanstack/react-router'

import VerifyEmailPage from '@pages/auth/VerifyEmailPage'
import { paths } from '@shared/router'

export const Route = createFileRoute(paths.AUTH.VERIFY_EMAIL)({
  validateSearch: (search: { token?: string }) => ({
    token: search.token,
  }),

  component: VerifyEmailPage,
})
