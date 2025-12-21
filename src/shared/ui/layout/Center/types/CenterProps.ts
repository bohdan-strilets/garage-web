import type { ReactNode } from "react";

import type { root } from "../Center.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type CenterStyleProps = RecipeVariants<typeof root>;

export type CenterBaseProps = {
  children: ReactNode;
  className?: string;
};

export type CenterProps = CenterBaseProps & CenterStyleProps;
