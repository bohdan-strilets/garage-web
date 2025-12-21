import type { ElementType, ReactNode } from "react";

import type { root } from "../Text.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type TextStyleProps = RecipeVariants<typeof root>;

export type TextProps<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & TextStyleProps &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;
