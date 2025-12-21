import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  lineHeight: "1",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("button", {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("ul, ol", {
  listStyle: "none",
  padding: 0,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontWeight: "inherit",
});

globalStyle("p", {
  overflowWrap: "break-word",
});

globalStyle("h1, h2, h3, h4, h5, h6, p, span", {
  overflowWrap: "break-word",
});

globalStyle(":focus", {
  outline: "none",
});

globalStyle(":focus-visible", {
  outline: "2px solid currentColor",
  outlineOffset: "2px",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
