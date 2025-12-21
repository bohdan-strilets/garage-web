import { createTheme } from "@vanilla-extract/css";

import { themeContract } from "../contract/themeContract.css";
import { lightColors } from "../tokens/colorsLight";
import { motion } from "../tokens/motion";
import { radius } from "../tokens/radius";
import { shadow } from "../tokens/shadow";
import { space } from "../tokens/spacing";
import { typography } from "../tokens/typography";
import { zIndex } from "../tokens/zIndex";

export const lightTheme = createTheme(themeContract, {
  color: lightColors,
  font: typography,
  space,
  radius,
  shadow,
  motion,
  zIndex,
});
