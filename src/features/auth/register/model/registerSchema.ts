import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must be at most 50 characters"),

    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must be at most 50 characters"),

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

    confirmPassword: z.string().min(1, "Confirm password"),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
