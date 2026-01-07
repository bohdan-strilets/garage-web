import type { DrivingLicense } from './DrivingLicense'
import type { UserAddress } from './UserAddress'
import type { UserGender } from '../enums/UserGender'

export type UserProfile = {
  firstName: string
  lastName: string
  nickname?: string | null
  dateBirth?: Date | null
  gender?: UserGender
  address?: UserAddress
  drivingLicense?: DrivingLicense
}
