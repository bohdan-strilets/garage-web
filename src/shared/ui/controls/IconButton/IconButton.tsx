import clsx from "clsx";

import { Spinner } from "@shared/ui/feedback/Spinner";

import { label, root } from "./IconButton.css";

import type { IconButtonProps } from "./types/IconButtonProps";

export const IconButton = ({
  type = "button",
  variant = "primary",
  size = "md",
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
      {loading ? (
        <Spinner
          size={size === "sm" ? "xs" : "sm"}
          tone={variant === "primary" ? "inverse" : "default"}
        />
      ) : (
        <span aria-hidden={loading} className={loading ? label : ""}>
          {children}
        </span>
      )}
    </button>
  );
};
