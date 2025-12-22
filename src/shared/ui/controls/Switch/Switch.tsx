import { forwardRef } from "react";

import clsx from "clsx";

import { Text } from "@shared/ui/typography/Text";

import { root, hiddenInput, track, thumb } from "./Switch.css";

import type { SwitchProps } from "./types/SwitchProps";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, disabled, hasError, ...props }, ref) => {
    return (
      <label className={clsx(root({ disabled }), className)}>
        <input ref={ref} type="checkbox" className={hiddenInput} disabled={disabled} {...props} />

        <span className={track({ hasError })} aria-hidden>
          <span className={thumb} />
        </span>

        {label && <Text variant="checkboxLabel">{label}</Text>}
      </label>
    );
  },
);

Switch.displayName = "Switch";
