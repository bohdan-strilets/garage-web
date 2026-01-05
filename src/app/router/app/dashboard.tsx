import { createFileRoute } from '@tanstack/react-router'

import DashboardPage from '@pages/app/DashboardPage'

export const Route = createFileRoute('/app/dashboard')({
  component: () => <DashboardPage />,
})
