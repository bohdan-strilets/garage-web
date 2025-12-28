import type { image } from "../Logo.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type LogoStyleProps = RecipeVariants<typeof image>;

export type LogoBaseProps = {
  variant?: "full" | "icon";
  className?: string;
};

export type LogoProps = LogoStyleProps & LogoBaseProps;
