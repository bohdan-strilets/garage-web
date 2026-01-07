import type { UserProfile } from './UserProfile'
import type { UserSettings } from './UserSettings'
import type { UserVerification } from './UserVerification'
import type { UserRole } from '../enums/UserRole'

export type UserSelf = {
  _id: string
  email: string
  phone?: string
  roles: UserRole[]
  profile: UserProfile
  settings: UserSettings
  verification: UserVerification
  vehicles: string[]
  createdAt: Date
  updatedAt: Date
}
