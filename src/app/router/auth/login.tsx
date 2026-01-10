import { createFileRoute } from '@tanstack/react-router'

import LoginPage from '@pages/auth/LoginPage'
import { paths } from '@shared/router'

export const Route = createFileRoute(paths.AUTH.LOGIN)({
  component: LoginPage,
})
