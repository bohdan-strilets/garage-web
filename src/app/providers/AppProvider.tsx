import { Overlay } from "@app/overlay";

import { AuthProvider } from "./AuthProvider";
import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ToasterProvider } from "./ToasterProvider";

export const AppProviders = () => {
  return (
    <>
      <QueryProvider>
        <ThemeProvider>
          <AuthProvider>
            <ToasterProvider />
            <RouterProvider />
          </AuthProvider>
        </ThemeProvider>
      </QueryProvider>

      <Overlay />
    </>
  );
};
