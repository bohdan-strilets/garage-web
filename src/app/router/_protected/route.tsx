import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

import { sessionSelectors } from '@entities/session'
import { paths } from '@shared/router'

export const Route = createFileRoute('/_protected')({
  beforeLoad: () => {
    const isAuthenticated = sessionSelectors.isAuthenticated()

    if (!isAuthenticated) {
      throw redirect({ to: paths.AUTH.LOGIN })
    }
  },

  component: () => <Outlet />,
})
