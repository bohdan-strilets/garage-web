export const PRESSURE_UNIT = {
  BAR: 'bar',
  PSI: 'psi',
} as const

export type PressureUnit = (typeof PRESSURE_UNIT)[keyof typeof PRESSURE_UNIT]
