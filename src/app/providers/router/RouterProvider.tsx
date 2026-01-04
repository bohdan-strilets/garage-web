import { RouterProvider as TanStackRouterProvider } from '@tanstack/react-router'

import { router } from '../../router/router'

export const RouterProvider = () => {
  return <TanStackRouterProvider router={router} />
}
