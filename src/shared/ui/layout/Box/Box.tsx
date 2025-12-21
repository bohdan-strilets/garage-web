import clsx from "clsx";

import { root } from "./Box.css";

import type { BoxProps } from "./types/BoxProps";

export const Box = ({ children, className, ...props }: BoxProps) => {
  return <div className={clsx(root({ ...props }), className)}>{children}</div>;
};
