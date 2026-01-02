import type { ApiResponse } from "@shared/api";
import type { AuthResponse } from "@shared/types/auth/AuthResponse";

export type GetMeResponse = ApiResponse<AuthResponse>;
