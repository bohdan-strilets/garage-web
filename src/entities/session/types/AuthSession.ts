import type { AuthResponse } from "@shared/types/auth/AuthResponse";

export type AuthSession = Pick<AuthResponse, "accessToken" | "user">;
