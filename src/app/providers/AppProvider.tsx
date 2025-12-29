import { Overlay } from "@app/overlay";

import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";

export const AppProviders = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>

      <Overlay />
    </>
  );
};
