import * as z from "zod";
import { passwordSchema } from "./password.schema";
import { transformedPhone } from "../utils/phone.util";

// Login Schema
export const loginSchema = z.object({
  email: z.string().min(1, "Your email is required"),
  password: z.string().min(1, "Your password is required"),
});
export type LoginValues = z.infer<typeof loginSchema>;

// Register Schema
export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "Firstname is required")
      .min(3, "Must be at least 3 characters long")
      .regex(/^[a-zA-Z]+$/, "Only letters are allowed"),
    lastName: z
      .string()
      .min(1, "Lastname is required")
      .min(3, "Must be at least 3 characters long")
      .regex(/^[a-zA-Z]+$/, "Only letters are allowed"),
    username: z
      .string()
      .min(1, "Username is required")
      .min(3, "Must be at least 3 characters long"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid Email Address"),
    password: passwordSchema.shape.password,
    rePassword: z.string(),
    phone: z
      .string()
      .nonempty("Phone is required")
      .transform(transformedPhone)
      .refine((value) => /^01[0125][0-9]{8}$/.test(value), {
        message: "Invalid Egyption Phone Number",
      }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });
export type RegisterValues = z.infer<typeof registerSchema>;
