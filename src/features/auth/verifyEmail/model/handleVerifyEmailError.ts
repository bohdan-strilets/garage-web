import toast from "react-hot-toast";

import type { ApiError } from "@shared/api/types/ApiError";
import { ERROR_CODES } from "@shared/errors";
import { errorMessages } from "@shared/errors/errorMessages";

export const handleVerifyEmailError = (error: ApiError) => {
  switch (error.code) {
    case ERROR_CODES.EMAIL_VERIFICATION_RESEND_TOO_SOON:
      toast(errorMessages[error.code], { icon: "⏳" });
      break;

    case ERROR_CODES.EMAIL_ALREADY_VERIFIED:
      toast.success(errorMessages[error.code]);
      break;

    case ERROR_CODES.SESSION_INVALID:
      toast.error(errorMessages[error.code]);
      break;

    default:
      toast.error(errorMessages[ERROR_CODES.INTERNAL_SERVER_ERROR]);
  }
};
