import type { UserSelf } from "../types/UserSelf";

export const isEmailVerified = (user: UserSelf | null): boolean => {
  return Boolean(user?.verification.isEmailVerified);
};

export const isPhoneVerified = (user: UserSelf | null): boolean => {
  return Boolean(user?.verification.isPhoneVerified);
};
