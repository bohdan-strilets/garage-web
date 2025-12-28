import { style } from "@vanilla-extract/css";

import { themeContract } from "@shared/styles";

export const root = style({
  display: "flex",
  flexDirection: "column",

  padding: themeContract.space.md,
  height: "100vh",
});

export const accountSection = style({
  marginTop: "auto",
});
