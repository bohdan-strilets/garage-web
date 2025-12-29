export const USER_GENDER = {
  MALE: "male",
  FEMALE: "female",
  OTHER: "other",
} as const;

export type User_Gender = (typeof USER_GENDER)[keyof typeof USER_GENDER];
