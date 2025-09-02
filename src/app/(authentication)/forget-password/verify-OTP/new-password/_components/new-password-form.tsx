"use client";

import PasswordField from "@/components/shared/password-filed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { newPasswordSchema, NewPasswordValue } from "@/lib/schemas/auth.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useNewPassword from "../_hooks/use-new-password";
import { ChangePasswordResponse } from "@/lib/types/auth";
import { useToast } from "@/hooks/use-toast";
import FormErrorMessage from "@/components/shared/form-error-message";
import { LoaderCircle } from "lucide-react";

export default function UpdatePasswordForm({ email }: { email: string }) {
  const { toast } = useToast();
  //Form
  const form = useForm<NewPasswordValue>({
    defaultValues: {
      email: email,
      newPassword: "",
      rePassword:""
    },
    resolver: zodResolver(newPasswordSchema),
  });
  const { isValid, isSubmitted } = form.formState;

  //Mutations
  const { isPending, error, setNewPassword } = useNewPassword();

  //Function
  const onSubmit: SubmitHandler<NewPasswordValue> = (values) => {
    console.log(values);
    setNewPassword(values, {
      onSuccess: (data: SuccessResponse<ChangePasswordResponse>) => {
        if (data.message === "success") {
          toast({
            description: "Success! Your new password is now active.",
            duration: 1000,
          });
          setTimeout(() => {
            location.href = "/login";
          }, 1000);
        }
      },
    });
  };
  return (
    <Form {...form}>
      <Card className="w-[28.25rem] border-none shadow-none">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="mb-4 flex flex-col gap-4 p-0">
            {/* New Password */}
            <FormField
              name="newPassword"
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
          </CardContent>

          {/* Error */}
          <FormErrorMessage error={error} />

          <CardFooter className="flex flex-col gap-9 p-0 pt-6">
            {/* Update Password Button */}
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
                " Update Password"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Form>
  );
}
