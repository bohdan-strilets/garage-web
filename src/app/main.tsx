import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const rootDiv = document.getElementById('root') as HTMLDivElement;

createRoot(rootDiv).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
