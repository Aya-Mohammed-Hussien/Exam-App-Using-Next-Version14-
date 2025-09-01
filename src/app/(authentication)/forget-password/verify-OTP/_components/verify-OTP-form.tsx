"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyCodeSchema, VerifyCodeValue } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useVerifyCode from "../_hooks/use-verifyCode";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import FormErrorMessage from "@/components/shared/form-error-message";
import CreateAccoutnLink from "@/components/shared/create-account-link";

export default function VerifyForm() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowResend(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResendClick = () => {
    setTimeLeft(60);
    setShowResend(false);
    console.log("Resending code...");
  };

  // Form
  const form = useForm<VerifyCodeValue>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(verifyCodeSchema),
  });
  const { isValid, isSubmitted } = form.formState;

  //Mutation
  const { isPending, error, verifyOTP } = useVerifyCode();

  //Function
  const onSubmit: SubmitHandler<VerifyCodeValue> = (values) => {
    verifyOTP(values, {
      onSuccess: (data: VerifyCodeSuccessResponse) => {
        if (data.status === "Success") {
          router.push("/forget-password/verify-OTP/new-password");
        }
      },
    });
  };

  return (
    <Form {...form}>
      <Card className="mx-auto border-none shadow-none">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="mb-4 p-0">
            <FormField
              name="resetCode"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    {/* Field */}
                    <InputOTP
                      maxLength={6}
                      {...field}
                      error={!!fieldState.error || !!error}
                    >
                      <InputOTPGroup className="gap-4">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  {/* Message */}
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />

            {showResend ? (
              <div className="mt-6 text-center font-geist text-sm text-gray-500">
                <span>Didn’t receive the code?</span>
                <Button
                  variant="link"
                  type="button"
                  onClick={handleResendClick}
                  className="text-blue-600 hover:no-underline"
                >
                  Resend
                </Button>
              </div>
            ) : (
              <p className="mt-6 flex items-center justify-center font-geist text-sm text-gray-500">
                You can request another code in: {timeLeft}
              </p>
            )}
          </CardContent>

          {/* Error */}
          <FormErrorMessage error={error} />

          <CardFooter className="flex flex-col gap-9 p-0 pt-6">
            {/* Verify Code Button */}
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
                " Verify Code"
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
