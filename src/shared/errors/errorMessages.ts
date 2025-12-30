import type { ErrorCode } from "./ErrorCodes";

export const errorMessages: Record<ErrorCode, string> = {
  /* user */
  USER_EXISTS: "User with this email already exists",
  USER_NOT_FOUND: "User not found",

  PASSWORD_UPDATE_FAILED: "Failed to update password. Please try again",
  INVALID_CURRENT_PASSWORD: "Current password is incorrect",
  PASSWORD_SAME_AS_CURRENT: "New password must be different from current password",
  PASSWORD_RESET_TOKEN_INVALID: "Reset link is invalid or expired",

  EMAIL_NOT_VERIFIED: "Email address is not verified",
  EMAIL_ALREADY_VERIFIED: "Email address is already verified",
  EMAIL_VERIFICATION_RESEND_TOO_SOON:
    "Verification email was sent recently. Please wait before retrying",
  EMAIL_ALREADY_IN_USE: "Email address is already in use",

  PHONE_ALREADY_IN_USE: "Phone number is already in use",

  /* auth */
  INVALID_CREDENTIALS: "Invalid email or password",
  SESSION_INVALID: "Session expired. Please log in again",
  SESSION_NOT_FOUND: "Session not found",
  ACCOUNT_LOCKED: "Account is locked",

  REFRESH_TOKEN_REUSE_DETECTED: "Security issue detected. Please log in again",

  /* car care */
  CAR_CARE_PRODUCT_NOT_FOUND: "Car care product not found",
  CAR_CARE_SESSION_NOT_FOUND: "Car care session not found",

  /* maintenance */
  MAINTENANCE_RECORD_NOT_FOUND: "Maintenance record not found",

  /* energy */
  ODOMETER_VALUE_TOO_LOW: "Odometer value cannot be less than previous value",
  ENERGY_SESSION_NOT_FOUND: "Energy session not found",

  /* vehicle */
  VEHICLE_PLATE_ALREADY_EXISTS: "Vehicle with this plate number already exists",
  VEHICLE_NOT_FOUND: "Vehicle not found",

  /* media */
  IMAGE_NOT_FOUND: "Image not found",
  OWNER_IMAGES_NOT_FOUND: "No images found",
  OWNER_IMAGE_OF_KIND_NOT_FOUND: "Image of this type not found",

  /* server */
  INTERNAL_SERVER_ERROR: "Unexpected server error. Please try again later",
};
