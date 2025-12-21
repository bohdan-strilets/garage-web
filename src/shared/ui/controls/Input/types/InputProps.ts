import type { InputHTMLAttributes } from "react";

import type { root } from "../Input.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type InputStyleProps = RecipeVariants<typeof root>;

export type InputBaseProps = { className?: string };

export type InputProps = InputBaseProps & InputStyleProps & InputHTMLAttributes<HTMLInputElement>;
