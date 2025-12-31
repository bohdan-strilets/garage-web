import { http } from "@shared/api";

import type { GetMeResponse } from "../types/GetMeResponse";

export const getMe = () => {
  return http.get<GetMeResponse>("/auth/me");
};
