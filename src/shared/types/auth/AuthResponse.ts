import type { UserSelf } from "@entities/user/types/UserSelf";

export type AuthResponse = {
  user: UserSelf;
  accessToken: string;
};
