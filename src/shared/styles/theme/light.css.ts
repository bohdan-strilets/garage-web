import { createTheme } from "@vanilla-extract/css";

import { themeContract } from "../contract/themeContract.css";
import { lightColors } from "../tokens/colorsLight";
import { layout } from "../tokens/layout";
import { motion } from "../tokens/motion";
import { radius } from "../tokens/radius";
import { shadowLight } from "../tokens/shadowLight";
import { space } from "../tokens/spacing";
import { typography } from "../tokens/typography";
import { zIndex } from "../tokens/zIndex";

export const lightTheme = createTheme(themeContract, {
  color: lightColors,
  font: typography,
  space,
  radius,
  shadow: shadowLight,
  motion,
  zIndex,
  layout,
});
