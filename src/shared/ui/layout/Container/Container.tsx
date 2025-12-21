import clsx from "clsx";

import { root } from "./Container.css";

import type { ContainerProps } from "./types/ContainerProps";

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(root, className)}>{children}</div>;
};
