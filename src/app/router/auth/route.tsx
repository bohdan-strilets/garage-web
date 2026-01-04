import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
  component: () => (
    <div>
      <h1>Auth layout</h1>
      <Outlet />
    </div>
  ),
})
