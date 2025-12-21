import clsx from "clsx";

import { root } from "./Divider.css";

import type { DividerProps } from "./types/DividerProps";

export const Divider = ({ className, ...props }: DividerProps) => {
  return <div className={clsx(root({ ...props }), className)} />;
};
