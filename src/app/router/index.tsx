import { createFileRoute } from '@tanstack/react-router'

import HomePage from '@pages/landing/HomePage'

export const Route = createFileRoute('/')({
  component: () => <HomePage />,
})
