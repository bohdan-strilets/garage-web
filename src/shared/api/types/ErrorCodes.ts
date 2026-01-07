import type { errorCodeMap } from '../errors/errorCodeMap'

export type ErrorCodes = (typeof errorCodeMap)[keyof typeof errorCodeMap]
