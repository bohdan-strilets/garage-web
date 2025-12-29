import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { AppProviders } from "@app/providers";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>,
);
