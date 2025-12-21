import { forwardRef } from "react";

import clsx from "clsx";

import { root } from "./Input.css";

import type { InputProps } from "./types/InputProps";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", hasError, size, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={clsx(root({ hasError, size }), className)}
      />
    );
  },
);

Input.displayName = "Input";
