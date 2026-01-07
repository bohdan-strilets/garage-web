export const TIMEZONE = {
  EUROPE_WARSAW: 'Europe/Warsaw',
} as const

export type Timezone = (typeof TIMEZONE)[keyof typeof TIMEZONE]
