import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { AppThemeProvider } from '@shared/styles/theme';

import App from './App.tsx';

import '../shared/styles/global/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>,
);
