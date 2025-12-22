import { forwardRef, useState } from "react";

import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { Input } from "../Input";

import { buttonVisible, inputWrapper } from "./PasswordInput.css";

import type { PasswordInputProps } from "./types/PasswordInputProps";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ size, className, disabled, hasError, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(state => !state);

    return (
      <div className={inputWrapper}>
        <Input
          {...props}
          ref={ref}
          type={visible ? "text" : "password"}
          size={size}
          className={className}
          disabled={disabled}
          hasError={hasError}
        />

        <button
          type="button"
          className={buttonVisible}
          onClick={toggleVisibility}
          tabIndex={-1}
          aria-label={visible ? "Hide password" : "Show password"}
          disabled={disabled}
        >
          {visible ? <IoIosEyeOff /> : <IoIosEye />}
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
