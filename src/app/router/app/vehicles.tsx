import { createFileRoute } from '@tanstack/react-router'

import VehiclesPage from '@pages/app/VehiclesPage'

export const Route = createFileRoute('/app/vehicles')({
  component: () => <VehiclesPage />,
})
