import type { ErrorCodes } from '../types/ErrorCodes'
import type { FormErrorTarget } from '../types/FormErrorTarget'

export const codeToFieldMap: Record<ErrorCodes, FormErrorTarget> = {
  /* user */
  USER_EXISTS: 'email',
  USER_NOT_FOUND: 'root',

  PASSWORD_UPDATE_FAILED: 'root',
  INVALID_CURRENT_PASSWORD: 'currentPassword',
  PASSWORD_SAME_AS_CURRENT: 'newPassword',
  PASSWORD_RESET_TOKEN_INVALID: 'root',

  EMAIL_NOT_VERIFIED: 'root',
  EMAIL_ALREADY_VERIFIED: 'root',
  EMAIL_VERIFICATION_RESEND_TOO_SOON: 'root',
  EMAIL_ALREADY_IN_USE: 'email',

  PHONE_ALREADY_IN_USE: 'phone',

  /* auth */
  INVALID_CREDENTIALS: 'root',
  SESSION_INVALID: 'root',
  SESSION_NOT_FOUND: 'root',
  ACCOUNT_LOCKED: 'root',

  REFRESH_TOKEN_REUSE_DETECTED: 'root',

  /* car care */
  CAR_CARE_PRODUCT_NOT_FOUND: 'root',
  CAR_CARE_SESSION_NOT_FOUND: 'root',

  /* maintenance */
  MAINTENANCE_RECORD_NOT_FOUND: 'root',

  /* energy */
  ODOMETER_VALUE_TOO_LOW: 'odometer',
  ENERGY_SESSION_NOT_FOUND: 'root',

  /* vehicle */
  VEHICLE_PLATE_ALREADY_EXISTS: 'plate',
  VEHICLE_NOT_FOUND: 'root',

  /* media */
  IMAGE_NOT_FOUND: 'root',
  OWNER_IMAGES_NOT_FOUND: 'root',
  OWNER_IMAGE_OF_KIND_NOT_FOUND: 'root',

  /* server */
  INTERNAL_SERVER_ERROR: 'root',
}
