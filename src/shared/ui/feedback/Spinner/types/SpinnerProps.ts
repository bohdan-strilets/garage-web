import type { HTMLAttributes } from "react";

import type { root } from "../Spinner.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type SpinnerStyleProps = RecipeVariants<typeof root>;

export type SpinnerBaseProps = {
  className?: string;
  ariaLabel?: string;
};

export type SpinnerProps = SpinnerBaseProps & SpinnerStyleProps & HTMLAttributes<HTMLDivElement>;
