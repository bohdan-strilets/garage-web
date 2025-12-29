import type { UserSelf } from "@entities/user/types/UserSelf";

export type AuthSession = {
  user: UserSelf | null;
  accessToken: string | null;
};
