export const FUEL_ECONOMY_UNIT = {
  L_PER_100KM: 'L/100km',
  MPG_US: 'mpgUS',
} as const

export type FuelEconomyUnit =
  (typeof FUEL_ECONOMY_UNIT)[keyof typeof FUEL_ECONOMY_UNIT]
