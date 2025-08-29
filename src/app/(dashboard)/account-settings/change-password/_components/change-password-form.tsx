"use client";

import PasswordField from "@/components/shared/password-filed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  changePasswordSchema,
  ChangePasswordValues,
} from "@/lib/schemas/auth.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useChangePassword from "../_hooks/use-changePassword";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CircleX, LoaderCircle } from "lucide-react";

export default function ChangePasswordForm() {
  //Form
  const form = useForm<ChangePasswordValues>({
    defaultValues: {
      oldPassword: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(changePasswordSchema),
  });
  const { isValid, isSubmitted } = form.formState;

  //Mutation
  const { isPending, error, changePassword } = useChangePassword();

  //Function
  const onSubmit: SubmitHandler<ChangePasswordValues> = async (values) => {
   changePassword(values);
  };

  return (
    <Form {...form}>
      <Card className="border-none shadow-none">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="mb-8 flex flex-col p-0">
            {/*Current Password */}
            <FormField
              name="oldPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Current Password</FormLabel>
                  {/* Field */}
                  <FormControl>
                    <PasswordField
                      {...field}
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-10 flex flex-col gap-4">
              {/* New Password */}
              <FormField
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>New Password</FormLabel>
                    {/* Field */}
                    <FormControl>
                      <PasswordField
                        {...field}
                        error={!!fieldState.error || !!error}
                      />
                    </FormControl>
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm New Password */}
              <FormField
                name="rePassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>Confirm New Password</FormLabel>
                    {/* Field */}
                    <FormControl>
                      <PasswordField
                        {...field}
                        error={!!fieldState.error || !!error}
                      />
                    </FormControl>
                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>

          {/* Error */}
          {error && (
            <div className="relative mb-9 flex w-full items-center justify-center border-[0.0625rem] border-red-600 bg-red-50 py-3">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white text-red-600">
                <CircleX size={18} />
              </div>
              <p className="text-center font-geist text-sm font-normal text-red-600">
                {error.message}
              </p>
            </div>
          )}

          <CardFooter className="flex flex-col p-0">
            {/* Update Button */}
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
                " Update Password"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Form>
  );
}
