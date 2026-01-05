import { Outlet, createFileRoute } from '@tanstack/react-router'

import AppLayout from '@app/layouts/AppLayout'

export const Route = createFileRoute('/app')({
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
})
