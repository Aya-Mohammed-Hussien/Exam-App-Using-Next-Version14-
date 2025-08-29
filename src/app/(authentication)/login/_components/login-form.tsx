"use client";

import PasswordField from "@/components/shared/password-filed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginValues } from "@/lib/schemas/auth.schema";
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
import { zodResolver } from "@hookform/resolvers/zod";
import {LoaderCircle } from "lucide-react";
import FormErrorMessage from "@/components/features/error message/form-error-message";

export default function LoginForm() {
  //From
  const form = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const { isValid, isSubmitted } = form.formState;

  //Mutations
  const { isPending, error, login } = useLogin();

  //Functions
  const onSubmit: SubmitHandler<LoginValues> = (values) => {
    login(values);
  };

  return (
    <Form {...form}>
      <Card className="w-[28.25rem] border-none shadow-none">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="mb-11 flex flex-col gap-4 p-0">
            {/* Email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field , fieldState}) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Email</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      placeholder="user@example.com"
                      {...field}
                      type="email"
                      error={!!fieldState.error || !!error}
                    />
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
              render={({ field ,fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Password</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <PasswordField {...field} error={!!fieldState.error || !!error}/>
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
                className="ml-auto inline-block align-middle font-geist text-sm font-medium text-blue-600"
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>

          {/* Error */}
          <FormErrorMessage error={error}/>

          <CardFooter className="flex flex-col gap-9 p-0">
            {/* Login Button */}
            <Button
              disabled={isPending || (!isValid && isSubmitted)}
              type="submit"
              className="w-full bg-blue-600 align-middle font-geist text-sm font-medium text-white hover:bg-blue-600"
            >
              {isPending ? (
                <div className="animate-spin">
                  <LoaderCircle />
                </div>
              ) : (
                "Login"
              )}
            </Button>

            {/* Create Account */}
            <Link
              href="/register"
              className="align-middle font-geist text-sm font-medium leading-[100%] tracking-normal text-blue-600"
            >
              <span className="text-gray-500">Don’t have an account?</span>{" "}
              Create yours
            </Link>
          </CardFooter>
        </form>
      </Card>
    </Form>
  );
}
