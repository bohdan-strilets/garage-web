import { recipe } from "@vanilla-extract/recipes";

export const root = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  variants: {
    inline: { true: { display: "inline-flex" } },

    fullHeight: { true: { minHeight: "100%" } },
  },

  defaultVariants: {
    inline: false,
    fullHeight: false,
  },
});
