import { Outlet } from '@tanstack/react-router';

import { AppLayout } from '@shared/ui/layout/AppLayout';

export const AppShellRoute = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
