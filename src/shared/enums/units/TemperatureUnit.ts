export const TEMPERATURE_UNIT = {
  C: '°C',
  F: '°F',
} as const

export type TemperatureUnit =
  (typeof TEMPERATURE_UNIT)[keyof typeof TEMPERATURE_UNIT]
