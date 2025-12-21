import clsx from "clsx";

import { Spinner } from "@shared/ui/feedback/Spinner";

import { label, root } from "./Button.css";

import type { ButtonProps } from "./types/ButtonProps";

export const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
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
      <span aria-hidden={loading} className={loading ? label : ""}>
        {children}
      </span>
      {loading && (
        <Spinner
          size={size === "sm" ? "xs" : "sm"}
          tone={variant === "primary" ? "inverse" : "default"}
        />
      )}
    </button>
  );
};
