import { Overlay } from "@app/overlay";

import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ToasterProvider } from "./ToasterProvider";

export const AppProviders = () => {
  return (
    <>
      <QueryProvider>
        <ThemeProvider>
          <ToasterProvider />
          <RouterProvider />
        </ThemeProvider>
      </QueryProvider>

      <Overlay />
    </>
  );
};
