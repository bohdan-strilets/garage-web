import { createTheme } from "@vanilla-extract/css";

import { themeContract } from "../contract/themeContract.css";
import { darkColors } from "../tokens/colorsDark";
import { layout } from "../tokens/layout";
import { motion } from "../tokens/motion";
import { radius } from "../tokens/radius";
import { shadowDark } from "../tokens/shadowDark";
import { space } from "../tokens/spacing";
import { typography } from "../tokens/typography";
import { zIndex } from "../tokens/zIndex";

export const darkTheme = createTheme(themeContract, {
  color: darkColors,
  font: typography,
  space,
  radius,
  shadow: shadowDark,
  motion,
  zIndex,
  layout,
});
