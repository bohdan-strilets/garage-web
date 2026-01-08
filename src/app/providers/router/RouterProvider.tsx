import { RouterProvider as TanStackRouterProvider } from '@tanstack/react-router'

import { router } from '../../router/router'

const RouterProvider = () => {
  return <TanStackRouterProvider router={router} />
}

export default RouterProvider
