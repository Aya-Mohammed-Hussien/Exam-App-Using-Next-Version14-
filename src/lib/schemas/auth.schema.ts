import * as z from "zod";
import { passwordSchema } from "./password.schema";
import { isValidPhoneNumber } from "react-phone-number-input";


// Login Schema
export const loginSchema = z.object({
  email: z.string().min(1, "Your email is required"),
  password: z.string().min(1, "Your password is required"),
});
export type LoginValues = z.infer<typeof loginSchema>;


// Register Schema 
export const registerSchema = z.object({
    firstName:z.string().min(3, {message:"First name must be at least 3 characters long"}),
    lastName:z.string().min(3 , {message:"Last name must be at least 3 characters long"}),
    username:z.string().min(3,{message:"Username must be at least 3 characters long"}),
    email:z.email({error: (error)=> error.code === "invalid_type" ? "Email is required" : "Invalid Email Address"}),
    password:passwordSchema.shape.password,
    rePassword:z.string(),
    phone:z.string().refine((value)=> isValidPhoneNumber(value || "") , {message:"Invalid phone number"}),
}).refine((data)=> data.password === data.rePassword , {
  message:"Passwords do not match" ,
  path:["rePassword"]
})
export type registerValues = z.infer<typeof registerSchema>;