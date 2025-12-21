import clsx from "clsx";

import { root } from "./Center.css";

import type { CenterProps } from "./types/CenterProps";

export const Center = ({ className, children, ...props }: CenterProps) => {
  return <div className={clsx(root({ ...props }), className)}>{children}</div>;
};
