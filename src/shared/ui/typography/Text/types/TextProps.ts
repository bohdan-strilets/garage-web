import type { ElementType, ReactNode } from "react";

import type { root } from "../Text.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type TextStyleProps = RecipeVariants<typeof root>;

export type TextBaseProps<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export type TextProps<T extends ElementType = "p"> = TextBaseProps<T> &
  TextStyleProps &
  TextStyleProps &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;
