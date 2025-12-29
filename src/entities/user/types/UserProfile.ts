import type { DrivingLicense } from "./DrivingLicense";
import type { UserAddress } from "./UserAddress";
import type { User_Gender } from "../enums/UserGender";

export type UserProfile = {
  firstName: string;
  lastName: string;
  nickname?: string | null;
  dateBirth?: Date | null;
  gender?: User_Gender;
  address?: UserAddress;
  drivingLicense?: DrivingLicense;
};
