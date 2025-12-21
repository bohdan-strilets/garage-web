import { globalStyle } from "@vanilla-extract/css";

import { themeContract } from "./contract/themeContract.css";

globalStyle("html[data-theme='light']", {
  colorScheme: "light",
});

globalStyle("html[data-theme='dark']", {
  colorScheme: "dark",
});

globalStyle("body", {
  fontFamily: themeContract.font.family.base,
  fontSize: themeContract.font.size.md,
  lineHeight: themeContract.font.lineHeight.md,

  backgroundColor: themeContract.color.surface.canvas,
  color: themeContract.color.text.primary,
});

globalStyle("h1", {
  fontSize: themeContract.font.size["2xl"],
  lineHeight: themeContract.font.lineHeight.sm,
  fontFamily: themeContract.font.family.heading,
});

globalStyle("h2", {
  fontSize: themeContract.font.size.xl,
  lineHeight: themeContract.font.lineHeight.sm,
  fontFamily: themeContract.font.family.heading,
});

globalStyle("h3", {
  fontSize: themeContract.font.size.lg,
  lineHeight: themeContract.font.lineHeight.sm,
});

globalStyle("h4", {
  fontSize: themeContract.font.size.md,
  lineHeight: themeContract.font.lineHeight.sm,
});

globalStyle("h5", {
  fontSize: themeContract.font.size.sm,
});

globalStyle("h6", {
  fontSize: themeContract.font.size.xs,
});

globalStyle("p", {
  fontSize: themeContract.font.size.md,
  lineHeight: themeContract.font.lineHeight.md,
  color: themeContract.color.text.secondary,
});

globalStyle("small", {
  fontSize: themeContract.font.size.sm,
  color: themeContract.color.text.muted,
});

globalStyle("a", {
  color: themeContract.color.brand.primary,
  textDecoration: "none",
});

globalStyle("a:hover", {
  textDecoration: "underline",
});

globalStyle("::selection", {
  backgroundColor: themeContract.color.brand.primarySoft,
  color: themeContract.color.text.primary,
});

globalStyle("[disabled]", {
  opacity: 0.6,
  cursor: "not-allowed",
});

globalStyle(":focus", {
  outline: "none",
});

globalStyle(":focus-visible", {
  outline: `2px solid ${themeContract.color.border.accent}`,
  outlineOffset: "2px",
});

globalStyle("hr", {
  border: "none",
  borderTop: `1px solid ${themeContract.color.border.subtle}`,
  marginBlock: themeContract.space.lg,
});

globalStyle("::-webkit-scrollbar", {
  width: "10px",
  height: "10px",
});

globalStyle("::-webkit-scrollbar-thumb", {
  backgroundColor: themeContract.color.border.default,
  borderRadius: themeContract.radius.pill,
});

globalStyle("::-webkit-scrollbar-track", {
  backgroundColor: themeContract.color.surface.muted,
});
