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
import { LoaderCircle } from "lucide-react";
import FormErrorMessage from "@/components/features/error message/form-error-message";
import { useToast } from "@/hooks/use-toast";
import { ChangePasswordResponse } from "@/lib/types/auth";
export default function ChangePasswordForm() {
  const { toast } = useToast();
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
    changePassword(values, {
      onSuccess: (data: SuccessResponse<ChangePasswordResponse>) => {
        if (data.message === "success") {
          toast({
            description: "Your password has been updated.",
            duration: 1500 ,
          });
          form.reset()
        }
      },
    });
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
          <FormErrorMessage error={error} />

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
