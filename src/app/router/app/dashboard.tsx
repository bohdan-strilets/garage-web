import { createFileRoute } from '@tanstack/react-router'

import DashboardPage from '@pages/app/DashboardPage'
import { paths } from '@shared/router'

export const Route = createFileRoute(paths.APP.DASHBOARD.ROOT)({
  component: DashboardPage,
})
