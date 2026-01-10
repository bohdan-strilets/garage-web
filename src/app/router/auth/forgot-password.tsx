import { createFileRoute } from '@tanstack/react-router'

import ForgotPasswordPage from '@pages/auth/ForgotPasswordPage'
import { paths } from '@shared/router'

export const Route = createFileRoute(paths.AUTH.FORGOT_PASSWORD)({
  component: ForgotPasswordPage,
})
