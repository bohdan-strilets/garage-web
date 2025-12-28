import { style } from "@vanilla-extract/css";

import { themeContract } from "@shared/styles";

export const root = style({
  flex: 1,

  overflowY: "auto",
  overflowX: "hidden",
  overscrollBehavior: "contain",
});

export const list = style({
  display: "flex",
  flexDirection: "column",

  gap: themeContract.space.sm,
});
