import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouterProvider } from './providers/router/RouterProvider.tsx';
import { ThemeProvider } from './providers/theme/index.ts';

import '@shared/styles/reset.css.ts';

const rootDiv = document.getElementById('root') as HTMLDivElement;

createRoot(rootDiv).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouterProvider />
    </ThemeProvider>
  </StrictMode>,
);
