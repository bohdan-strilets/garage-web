import { style } from "@vanilla-extract/css";

import { themeContract } from "@shared/styles";

export const root = style({
  width: "100%",
  padding: `0 ${themeContract.space.md}`,
});
