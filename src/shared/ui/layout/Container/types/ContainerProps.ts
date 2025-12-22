import type { ReactNode } from "react";

import type { root } from "../Container.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type ContainerStyleProps = RecipeVariants<typeof root>;

export type ContainerBaseProps = {
  children?: ReactNode;
  className?: string;
};

export type ContainerProps = ContainerBaseProps & ContainerStyleProps;
