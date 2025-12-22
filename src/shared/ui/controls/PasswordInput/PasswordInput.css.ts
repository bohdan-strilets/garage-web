import { style } from "@vanilla-extract/css";

import { themeContract } from "@shared/styles";

export const inputWrapper = style({
  position: "relative",
  width: "100%",
});

export const buttonVisible = style({
  position: "absolute",
  top: "50%",
  right: "10px",
  transform: "translateY(-50%)",

  padding: themeContract.space.xs,

  color: themeContract.color.text.muted,
  borderRadius: themeContract.radius.sm,
  background: "transparent",
  border: "none",

  cursor: "pointer",
  transition: `background-color ${themeContract.motion.medium} ease-in-out`,

  ":hover": {
    backgroundColor: themeContract.color.surface.muted,
  },
});
