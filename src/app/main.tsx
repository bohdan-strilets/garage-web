import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { ThemeProvider } from './prividers/theme';

import '@shared/styles/reset.css.ts';

const rootDiv = document.getElementById('root') as HTMLDivElement;

createRoot(rootDiv).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
