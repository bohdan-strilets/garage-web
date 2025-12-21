import type { root } from "../Spacer.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type SpacerStyleProps = RecipeVariants<typeof root>;

export type SpacerBaseProps = { className?: string };

export type SpacerProps = SpacerStyleProps & SpacerBaseProps;
