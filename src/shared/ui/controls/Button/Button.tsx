import clsx from "clsx";

import { root } from "./Button.css";

import type { ButtonProps } from "./types/ButtonProps";

export const Button = ({
  type = "button",
  variant,
  size,
  fullWidth,
  className,
  children,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(root({ variant, size, fullWidth }), className)}
      {...props}
    >
      <span aria-hidden={loading}>{children}</span>
      {loading && "..."}
    </button>
  );
};
