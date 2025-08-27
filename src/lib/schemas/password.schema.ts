import * as z from "zod";

export const passwordSchema = z.object({
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must include at least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must include at least one lowercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must include at least one number",
    })
    .refine((val) => /[!@#$%^&*]/.test(val), {
      message: "Password must include at least one special character",
    }),
});
