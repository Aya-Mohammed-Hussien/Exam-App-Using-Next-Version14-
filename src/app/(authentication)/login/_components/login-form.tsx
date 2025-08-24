"use client";

import PasswordField from "@/components/shared/password-filed";
import UserDataField from "@/components/shared/user-data-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginValues } from "@/lib/schemes/auth.schema";
import useLogin from "../_hooks/use-login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod"
import { LoaderCircle } from "lucide-react";

export default function LoginForm() {
  //From
  const form = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver:zodResolver(loginSchema),
  });
const{isValid , isSubmitted}=form.formState


  //Mutations
  const { isPending, error, login } = useLogin();

  //Functions
  const onSubmit: SubmitHandler<LoginValues> = (values) => {
    login(values);
  };

  return (
    <Form {...form}>
      <Card className="border-none shadow-none w-[28.25rem]">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="flex flex-col gap-4 p-0 mb-11">
            {/* Email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Email</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input placeholder="user@example.com" {...field} />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Password</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forget Password */}
            <div className="flex items-center">
              <Link
                href="/forget-password"
                className="ml-auto inline-block text-blue-600 font-geist text-sm font-medium align-middle"
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>

           {/* Error */}
           {error && <p>{error.message}</p>}

          <CardFooter className="flex flex-col gap-9 p-0">
            {/* Login Button */}
            <Button
            disabled={isPending || (!isValid && isSubmitted)}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-600 font-geist text-sm font-medium align-middle text-white"
            >
              {isPending ? <div className="animate-spin"><LoaderCircle /></div> : "Login"}
            </Button>

            {/* Create Account */}
            <Link
              href="/register"
              className="text-blue-600 text-sm tracking-normal font-geist font-medium align-middle leading-[100%]"
            >
              <span className="text-gray-500">Don’t have an account?</span>{" "}
              Create yours
            </Link>
          </CardFooter>
        </form>
      </Card>
    </Form>

    // <Card className="border-none shadow-none w-[28.25rem]">
    //   <form onSubmit={handleSubmit}>
    //     <CardContent className="flex flex-col gap-4 p-0 mb-11">
    //       {/* email */}
    //       <UserDataField
    //         id="email"
    //         placeholder="user@example.com"
    //         type="email"
    //         label=" Email"
    //         name="email"
    //       />

    //       {/* Password */}
    //       <PasswordField id="password" label="Password" />
    //       <div className="flex items-center">
    //         <Link
    //           href="/forget-password"
    //           className="ml-auto inline-block text-blue-600 font-geist text-sm font-medium align-middle"
    //         >
    //           Forgot your password?
    //         </Link>
    //       </div>
    //     </CardContent>

    //     <CardFooter className="flex flex-col gap-9 p-0">
    //       {/* Login Button */}
    //       <Button
    //         type="submit"
    //         className="w-full bg-blue-600 hover:bg-blue-600 font-geist text-sm font-medium align-middle text-white"
    //       >
    //         Login
    //       </Button>

    //       {/* Create Account */}
    //       <Link
    //         href="/register"
    //         className="text-blue-600 text-sm tracking-normal font-geist font-medium align-middle leading-[100%]"
    //       >
    //         <span className="text-gray-500">Don’t have an account?</span> Create
    //         yours
    //       </Link>
    //     </CardFooter>
    //   </form>
    // </Card>
  );
}
