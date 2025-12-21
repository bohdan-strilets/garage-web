import type { ReactNode } from "react";

import type { root } from "../Surface.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type SurfaceStyleProps = RecipeVariants<typeof root>;

export type SurfaceBaseProps = {
  children?: ReactNode;
  className?: string;
};

export type SurfaceProps = SurfaceStyleProps & SurfaceBaseProps;
