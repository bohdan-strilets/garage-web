import type { ApiError } from "@shared/api/types/ApiError";
import { ERROR_CODES } from "@shared/errors";
import { errorMessages } from "@shared/errors/errorMessages";

import type { RegisterFormValues } from "./registerSchema";
import type { UseFormReturn } from "react-hook-form";

export const handleRegisterError =
  (form: UseFormReturn<RegisterFormValues>) => (error: ApiError) => {
    switch (error.code) {
      case ERROR_CODES.EMAIL_ALREADY_IN_USE:
      case ERROR_CODES.USER_EXISTS:
        form.setError("email", {
          type: "server",
          message: errorMessages[error.code],
        });
        break;

      default:
        form.setError("root", {
          type: "server",
          message: errorMessages.INTERNAL_SERVER_ERROR,
        });
    }
  };
