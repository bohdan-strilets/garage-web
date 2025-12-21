import type { ReactNode } from "react";

import type { root } from "../Stack.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type StackStyleProps = RecipeVariants<typeof root>;

export type StackBaseProps = {
  children?: ReactNode;
  className?: string;
};

export type StackProps = StackStyleProps & StackBaseProps;
