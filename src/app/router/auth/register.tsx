import { createFileRoute } from '@tanstack/react-router'

import RegisterPage from '@pages/auth/RegisterPage'
import { paths } from '@shared/router'

export const Route = createFileRoute(paths.AUTH.REGISTER)({
  component: RegisterPage,
})
