import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { root } from "../IconButton.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type IconButtonStyleProps = RecipeVariants<typeof root>;

export type IconButtonBaseProps = {
  ariaLabel: string;
  loading?: boolean;
  className?: string;
  children: ReactNode;
};

export type IconButtonProps = IconButtonBaseProps &
  IconButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
