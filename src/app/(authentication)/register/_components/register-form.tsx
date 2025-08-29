"use client";

import PasswordField from "@/components/shared/password-filed";
import { PhoneInput } from "@/components/shared/phone-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { registerSchema, RegisterValues } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import useRegister from "../_hooks/use-register";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import FormErrorMessage from "@/components/features/error message/form-error-message";

export default function RegisterForm() {
  //Form
  const form = useForm<RegisterValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const { isValid, isSubmitted } = form.formState;

  //Mutations
  const { isPending, error, register } = useRegister();

  //Functions
  const onSubmit: SubmitHandler<RegisterValues> = (values) => {
    register(values);
  };

  return (
    <Form {...form}>
      <Card className="w-[28.25rem] border-none shadow-none">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="mb-11 flex flex-col gap-4 p-0">
            <div className="flex gap-3">
              {/* First Name */}
              <FormField
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      {/* Field */}
                      <Input
                        type="text"
                        {...field}
                        placeholder="Ahmed"
                        error={!!fieldState.error || !!error}
                      />
                    </FormControl>
                    {/* Message */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      {/* Field */}
                      <Input
                        type="text"
                        {...field}
                        placeholder="Abdullah"
                        error={!!fieldState.error || !!error}
                      />
                    </FormControl>
                    {/* Message */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Username */}
            <FormField
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <Input
                      type="text"
                      {...field}
                      placeholder="user123"
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <Input
                      type="email"
                      {...field}
                      placeholder="user@example.com"
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <PhoneInput
                      {...field}
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <PasswordField
                      {...field}
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              name="rePassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <PasswordField
                      {...field}
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          {/* Error */}
          <FormErrorMessage error={error} />

          <CardFooter className="flex flex-col gap-9 p-0">
            {/* Register Button */}
            <Button
              disabled={isPending || (!isValid && isSubmitted)}
              type="submit"
              className="w-full bg-blue-600 align-middle font-geist text-sm font-medium text-white"
            >
              {isPending ? (
                <div className="animate-spin">
                  <LoaderCircle />
                </div>
              ) : (
                " Create Account"
              )}
            </Button>

            {/* Already Having Account */}
            <Link
              href="/login"
              className="align-middle font-geist text-sm font-medium leading-[100%] tracking-normal text-blue-600"
            >
              <span className="text-gray-500">Already have an account? </span>{" "}
              Login
            </Link>
          </CardFooter>
        </form>
      </Card>
    </Form>
  );
}
