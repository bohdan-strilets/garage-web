import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: () => (
    <div>
      <h1>App layout</h1>
      <Outlet />
    </div>
  ),
})
