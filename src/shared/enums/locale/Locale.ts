export const LOCALE = {
  EN_US: 'en-US',
  PL_PL: 'pl-PL',
  UA_UA: 'ua-UA',
} as const

export type Locale = (typeof LOCALE)[keyof typeof LOCALE]
