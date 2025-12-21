import clsx from "clsx";

import { root } from "./Surface.css";

import type { SurfaceProps } from "./types/SurfaceProps";

export const Surface = ({ children, className, variant }: SurfaceProps) => {
  return <div className={clsx(root({ variant }), className)}>{children}</div>;
};
