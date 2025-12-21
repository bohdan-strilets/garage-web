import clsx from "clsx";

import { root } from "./Spacer.css";

import type { SpacerProps } from "./types/SpacerProps";

export const Spacer = ({ className, ...props }: SpacerProps) => {
  return <div className={clsx(root({ ...props }), className)} />;
};
