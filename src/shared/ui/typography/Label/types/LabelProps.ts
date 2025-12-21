import type { ReactNode } from "react";

import type { root } from "../Label.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type LabelStyleProps = RecipeVariants<typeof root>;

export type LabelBaseProps = {
  children: ReactNode;
  required?: boolean;
  htmlFor?: string;
};

export type LabelProps = LabelBaseProps & LabelStyleProps;
