import { style } from "@vanilla-extract/css";

import { themeContract } from "@shared/styles";

export const root = style({
  position: "sticky",

  display: "flex",
  alignItems: "center",
  flexShrink: 0,

  height: themeContract.layout.header.height,

  background: themeContract.color.surface.base,
  borderBottom: `1px solid ${themeContract.color.border.default}`,
  boxShadow: themeContract.shadow.md,
});
