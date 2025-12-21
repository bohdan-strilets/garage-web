import clsx from "clsx";

import { root } from "./Stack.css";

import type { StackProps } from "./types/StackProps";

export const Stack = ({ children, className, ...props }: StackProps) => {
  return <div className={clsx(root({ ...props }), className)}>{children}</div>;
};
