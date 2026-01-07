export const CURRENCY = {
  PLN: 'PLN',
  USD: 'USD',
  EUR: 'EUR',
  UAH: 'UAH',
} as const

export type Currency = (typeof CURRENCY)[keyof typeof CURRENCY]
