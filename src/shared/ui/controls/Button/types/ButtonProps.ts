import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { root } from "../Button.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type ButtonStyleProps = RecipeVariants<typeof root>;

export type ButtonBaseProps = {
  loading?: boolean;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = ButtonBaseProps &
  ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
