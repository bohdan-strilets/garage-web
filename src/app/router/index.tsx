import { createFileRoute } from '@tanstack/react-router'

import HomePage from '@pages/landing/HomePage'
import { paths } from '@shared/router'

export const Route = createFileRoute(paths.HOME)({
  component: HomePage,
})
