import type { DrivingCategory } from '../enums/DrivingCategory'

export type DrivingLicense = {
  number?: string | null
  categories?: DrivingCategory[]
  issuedAt?: Date | null
  expiresAt?: Date | null
  documentUrl?: string | null
}
