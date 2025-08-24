import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Your email is required"),
  password: z.string().min(1, "Your password is required"),
});

export type LoginValues = z.infer<typeof loginSchema>;
