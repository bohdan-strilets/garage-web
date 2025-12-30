import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .max(254, "Email must be at most 254 characters")
    .email("Invalid email")
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;
