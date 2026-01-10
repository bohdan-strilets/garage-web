import { createFileRoute } from '@tanstack/react-router'

import DashboardPage from '@pages/app/DashboardPage'

export const Route = createFileRoute('/_protected/_verified/dashboard')({
  component: DashboardPage,
})
