import clsx from "clsx";

import { root } from "./Spinner.css";

import type { SpinnerProps } from "./types/SpinnerProps";

export const Spinner = ({
  size,
  tone,
  className,
  ariaLabel = "Loading",
  ...props
}: SpinnerProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      className={clsx(root({ size, tone }), className)}
      {...props}
    />
  );
};
