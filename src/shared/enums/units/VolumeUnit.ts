export const VOLUME_UNIT = {
  LITER: 'L',
  GALLON_US: 'galUS',
} as const

export type VolumeUnit = (typeof VOLUME_UNIT)[keyof typeof VOLUME_UNIT]
