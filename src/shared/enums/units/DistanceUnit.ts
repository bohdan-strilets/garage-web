export const DISTANCE_UNIT = {
  KM: 'km',
  MILE: 'mile',
} as const

export type DistanceUnit = (typeof DISTANCE_UNIT)[keyof typeof DISTANCE_UNIT]
