import { recipe } from "@vanilla-extract/recipes";

import { themeContract } from "@shared/styles";

export const root = recipe({
  base: {
    flexShrink: 0,
  },

  variants: {
    size: {
      xs: { height: themeContract.space.xs },
      sm: { height: themeContract.space.sm },
      md: { height: themeContract.space.md },
      lg: { height: themeContract.space.lg },
      xl: { height: themeContract.space.xl },
      "2xl": { height: themeContract.space["2xl"] },
      "3xl": { height: themeContract.space["3xl"] },
    },

    horizontal: { true: {}, false: {} },
  },

  compoundVariants: [
    {
      variants: { horizontal: true, size: "xs" },
      style: { width: themeContract.space.xs, height: "auto" },
    },
    {
      variants: { horizontal: true, size: "sm" },
      style: { width: themeContract.space.sm, height: "auto" },
    },
    {
      variants: { horizontal: true, size: "md" },
      style: { width: themeContract.space.md, height: "auto" },
    },
    {
      variants: { horizontal: true, size: "lg" },
      style: { width: themeContract.space.lg, height: "auto" },
    },
    {
      variants: { horizontal: true, size: "xl" },
      style: { width: themeContract.space.xl, height: "auto" },
    },
    {
      variants: { horizontal: true, size: "2xl" },
      style: { width: themeContract.space["2xl"], height: "auto" },
    },
    {
      variants: { horizontal: true, size: "3xl" },
      style: { width: themeContract.space["3xl"], height: "auto" },
    },
  ],

  defaultVariants: {
    size: "md",
    horizontal: false,
  },
});
