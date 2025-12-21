import type { root } from "../Divider.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type DeviderStyleProps = RecipeVariants<typeof root>;

export type DividerBaseProps = { className?: string };

export type DividerProps = DeviderStyleProps & DividerBaseProps;
