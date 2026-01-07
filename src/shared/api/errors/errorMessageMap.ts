import type { ErrorCodes } from '../types/ErrorCodes'

export const errorMessageMap: Record<ErrorCodes, string> = {
  /* user */
  USER_EXISTS: 'User already exists',
  USER_NOT_FOUND: 'User not found',

  PASSWORD_UPDATE_FAILED: 'Unable to update password',
  INVALID_CURRENT_PASSWORD: 'Current password is incorrect',
  PASSWORD_SAME_AS_CURRENT: 'New password must be different',
  PASSWORD_RESET_TOKEN_INVALID: 'Invalid or expired reset token',

  EMAIL_NOT_VERIFIED: 'Email is not verified',
  EMAIL_ALREADY_VERIFIED: 'Email already verified',
  EMAIL_VERIFICATION_RESEND_TOO_SOON: 'Verification email was sent recently',
  EMAIL_ALREADY_IN_USE: 'Email is already in use',

  PHONE_ALREADY_IN_USE: 'Phone number is already in use',

  /* auth */
  INVALID_CREDENTIALS: 'Invalid email or password',
  SESSION_INVALID: 'Session is invalid',
  SESSION_NOT_FOUND: 'Session not found',
  ACCOUNT_LOCKED: 'Account is locked',

  REFRESH_TOKEN_REUSE_DETECTED: 'Security issue detected',

  /* car care */
  CAR_CARE_PRODUCT_NOT_FOUND: 'Car care product not found',
  CAR_CARE_SESSION_NOT_FOUND: 'Car care session not found',

  /* maintenance */
  MAINTENANCE_RECORD_NOT_FOUND: 'Maintenance record not found',

  /* energy */
  ODOMETER_VALUE_TOO_LOW: 'Odometer value is too low',
  ENERGY_SESSION_NOT_FOUND: 'Energy session not found',

  /* vehicle */
  VEHICLE_PLATE_ALREADY_EXISTS: 'Vehicle plate already exists',
  VEHICLE_NOT_FOUND: 'Vehicle not found',

  /* media */
  IMAGE_NOT_FOUND: 'Image not found',
  OWNER_IMAGES_NOT_FOUND: 'Owner images not found',
  OWNER_IMAGE_OF_KIND_NOT_FOUND: 'Owner image of this kind not found',

  /* server */
  INTERNAL_SERVER_ERROR: 'Internal server error',
}
