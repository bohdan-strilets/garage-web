import { Toaster } from "react-hot-toast";

import { themeContract } from "@shared/styles";

export const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      gutter={12}
      toastOptions={{
        duration: 4000,

        style: {
          minWidth: 280,
          maxWidth: 360,
          paddingBlock: themeContract.space.md,
          paddingInline: themeContract.space.lg,
          borderRadius: themeContract.radius.md,

          background: themeContract.color.surface.base,
          color: themeContract.color.text.primary,
          border: `1px solid ${themeContract.color.border.subtle}`,

          fontSize: themeContract.font.size.sm,
          lineHeight: themeContract.font.lineHeight.sm,

          boxShadow: themeContract.shadow.md,
        },

        success: {
          style: {
            borderLeft: `4px solid ${themeContract.color.status.success}`,
          },
          iconTheme: {
            primary: themeContract.color.status.success,
            secondary: themeContract.color.surface.base,
          },
        },

        error: {
          style: {
            borderLeft: `4px solid ${themeContract.color.status.danger}`,
          },
          iconTheme: {
            primary: themeContract.color.status.danger,
            secondary: themeContract.color.surface.base,
          },
        },

        loading: {
          style: {
            borderLeft: `4px solid ${themeContract.color.brand.primary}`,
          },
          iconTheme: {
            primary: themeContract.color.brand.primary,
            secondary: themeContract.color.surface.base,
          },
        },
      }}
    />
  );
};
