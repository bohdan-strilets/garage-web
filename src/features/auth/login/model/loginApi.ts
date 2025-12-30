import { http } from "@shared/api/http";

import type { LoginRequest } from "../types/LoginRequest";
import type { LoginResponse } from "../types/LoginResponse";

export const login = (body: LoginRequest) => {
  return http.post<LoginResponse, LoginRequest>("/auth/login", body);
};
