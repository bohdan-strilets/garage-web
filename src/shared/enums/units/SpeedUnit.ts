export const SPEED_UNIT = {
  KMH: 'km/h',
  MPH: 'mph',
} as const

export type SpeedUnit = (typeof SPEED_UNIT)[keyof typeof SPEED_UNIT]
