import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree';

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
