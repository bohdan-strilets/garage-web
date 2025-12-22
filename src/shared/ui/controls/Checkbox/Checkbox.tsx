import { forwardRef } from "react";

import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

import { Text } from "@shared/ui/typography/Text";

import { root, hiddenInput, box, checkIcon } from "./Checkbox.css";

import type { CheckboxProps } from "./types/CheckboxProps";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, hasError, disabled, ...props }, ref) => {
    return (
      <label className={clsx(root({ disabled }), className)}>
        <input ref={ref} type="checkbox" className={hiddenInput} disabled={disabled} {...props} />

        <span className={box({ hasError })} aria-hidden>
          <FaCheck className={checkIcon} />
        </span>

        {label && <Text variant="checkboxLabel">{label}</Text>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
