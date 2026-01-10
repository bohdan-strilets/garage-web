import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

import { AppLayout } from '@app/layouts/AppLayout'
import { sessionSelectors } from '@entities/session'
import { paths } from '@shared/router'

export const Route = createFileRoute('/_app')({
  beforeLoad: () => {
    const isAuthenticated = sessionSelectors.isAuthenticated()

    if (!isAuthenticated) {
      throw redirect({ to: paths.AUTH.LOGIN })
    }
  },

  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
})
