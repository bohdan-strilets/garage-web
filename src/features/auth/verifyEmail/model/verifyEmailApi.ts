import { http } from "@shared/api/http";

export const resendVerificationEmail = () => http.post<void>("/auth/verify-email/resend");
