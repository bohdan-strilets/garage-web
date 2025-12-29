import { Overlay } from "@app/overlay";

import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";

export const AppProviders = () => {
  return (
    <>
      <QueryProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </QueryProvider>

      <Overlay />
    </>
  );
};
