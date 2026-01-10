import { createFileRoute } from '@tanstack/react-router'

import VehiclesPage from '@pages/app/VehiclesPage'
import { paths } from '@shared/router'

export const Route = createFileRoute(paths.APP.VEHICLES.ROOT)({
  component: VehiclesPage,
})
