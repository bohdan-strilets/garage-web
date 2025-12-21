import clsx from "clsx";

import { root } from "./Surface.css";

import type { SurfaceProps } from "./types/SurfaceProps";

export const Surface = ({ children, className, ...props }: SurfaceProps) => {
  return <div className={clsx(root({ ...props }), className)}>{children}</div>;
};
