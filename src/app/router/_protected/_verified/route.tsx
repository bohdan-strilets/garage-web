import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

import { AppLayout } from '@app/layouts/AppLayout'
import { sessionSelectors } from '@entities/session'
import { paths } from '@shared/router'

export const Route = createFileRoute('/_protected/_verified')({
  beforeLoad: () => {
    const user = sessionSelectors.getUser()

    if (!user?.verification.email.isVerified) {
      throw redirect({ to: paths.AUTH.VERIFY_EMAIL })
    }
  },

  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
})
