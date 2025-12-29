import { http } from "@shared/api/http";

import type { RegisterRequest } from "../types/RegisterRequest";
import type { RegisterResponse } from "../types/RegisterResponse";

export const register = (body: RegisterRequest) => {
  return http.post<RegisterResponse, RegisterRequest>("/auth/register", body);
};
