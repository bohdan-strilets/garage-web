// features/auth/login/loginErrorMapper.ts

import type { ApiError } from "@shared/api/types/ApiError";
import { ERROR_CODES } from "@shared/errors";
import { errorMessages } from "@shared/errors/errorMessages";

import type { LoginFormValues } from "./loginSchema";
import type { UseFormReturn } from "react-hook-form";

export const handleLoginError = (form: UseFormReturn<LoginFormValues>) => (error: ApiError) => {
  switch (error.code) {
    case ERROR_CODES.INVALID_CREDENTIALS:
    case ERROR_CODES.EMAIL_NOT_VERIFIED:
    case ERROR_CODES.ACCOUNT_LOCKED:
    case ERROR_CODES.SESSION_INVALID:
      form.setError("root", {
        type: "server",
        message: errorMessages[error.code],
      });
      break;

    default:
      form.setError("root", {
        type: "server",
        message: errorMessages[ERROR_CODES.INTERNAL_SERVER_ERROR],
      });
  }
};
