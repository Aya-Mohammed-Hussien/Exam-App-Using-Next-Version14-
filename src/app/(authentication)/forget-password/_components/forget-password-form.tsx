"use client";

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
import { Input } from "@/components/ui/input";
import {
  forgetPasswordSchema,
  ForgetPasswordValue,
} from "@/lib/schemas/auth.schema";
import { LoaderCircle, MoveRight } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import useForgetPassword from "../_hooks/use-forgetPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPasswordResponse } from "@/lib/types/auth";
import FormErrorMessage from "@/components/shared/form-error-message";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import CreateAccoutnLink from "@/components/shared/create-account-link";

export default function ForgetPasswordForm() {
  const { toast } = useToast();
  const router = useRouter();

  //Form
  const form = useForm<ForgetPasswordValue>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgetPasswordSchema),
  });
  const { isValid, isSubmitted } = form.formState;

  //Mutations
  const { isPending, error, forgetPassword } = useForgetPassword();

  //Function
  const onSubmit: SubmitHandler<ForgetPasswordValue> = (values) => {
    forgetPassword(values, {
      onSuccess: (data: SuccessResponse<ForgetPasswordResponse>) => {
        if (data.message === "success") {
          toast({
            description: data.info,
            duration: 1500,
          });
          setTimeout(() => {
            router.push(
              `/forget-password/verify-OTP?email=${encodeURIComponent(values.email)}`,
            );
          }, 1500);
        }
      },
    });
  };

  return (
    <Form {...form}>
      <Card className="w-[28.25rem] border-none shadow-none">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="mb-4 p-0">
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
          </CardContent>

          {/* Error */}
          <FormErrorMessage error={error} />

          <CardFooter className="flex flex-col gap-9 p-0 pt-6">
            {/* Continue Button */}
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
                <div className="flex items-center justify-center gap-3">
                  Continue
                  <MoveRight size={18} />
                </div>
              )}
            </Button>

            {/* Create Account */}
            <CreateAccoutnLink />
          </CardFooter>
        </form>
      </Card>
    </Form>
  );
}
