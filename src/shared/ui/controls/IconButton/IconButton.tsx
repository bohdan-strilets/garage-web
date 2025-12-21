import clsx from "clsx";

import { root } from "./IconButton.css";

import type { IconButtonProps } from "./types/IconButtonProps";

export const IconButton = ({
  type = "button",
  variant,
  size,
  className,
  children,
  disabled,
  loading,
  ariaLabel,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled || loading}
      className={clsx(root({ variant, size }), className)}
      {...props}
    >
      <span aria-hidden={loading}>{children}</span>
      {loading && "..."}
    </button>
  );
};
