import clsx from "clsx";

import { root } from "./ButtonGroup.css";

import type { ButtonGroupProps } from "./types/ButtonGroupProps";

export const ButtonGroup = ({ children, orientation, className }: ButtonGroupProps) => {
  return <div className={clsx(root({ orientation }), className)}>{children}</div>;
};
