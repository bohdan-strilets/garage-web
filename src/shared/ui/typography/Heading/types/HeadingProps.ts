import type { ReactNode, HTMLAttributes } from "react";

import type { root } from "../Heading.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingStyleProps = RecipeVariants<typeof root>;

export type HeadingBaseProps = {
  children: ReactNode;
  as?: HeadingTag;
  className?: string;
};

export type HeadingProps = HeadingBaseProps &
  HeadingStyleProps &
  HTMLAttributes<HTMLHeadingElement>;
