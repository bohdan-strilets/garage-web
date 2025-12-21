import type { ReactNode } from "react";

import type { root } from "../Box.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type BoxStyleProps = RecipeVariants<typeof root>;

export type BoxBaseProps = {
  children?: ReactNode;
  className?: string;
};

export type BoxProps = BoxBaseProps & BoxStyleProps;
