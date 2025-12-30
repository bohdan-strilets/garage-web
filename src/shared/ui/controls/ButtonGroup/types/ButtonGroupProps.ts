import type { root } from "../ButtonGroup.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type ButtonGroupStyleProps = RecipeVariants<typeof root>;

export type ButtonGroupBaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type ButtonGroupProps = ButtonGroupBaseProps & ButtonGroupStyleProps;
