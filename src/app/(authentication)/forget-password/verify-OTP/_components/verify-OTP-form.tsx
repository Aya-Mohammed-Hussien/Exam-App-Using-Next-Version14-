"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

export default function VerifyForm() {
  return (
    <Card className="mx-auto border-none shadow-none">
      <form>
        <CardContent className="mb-4 p-0">
          <InputOTP maxLength={6}>
            <InputOTPGroup className="gap-4">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="flex justify-center items-center text-gray-500 font-geist text-sm mt-6">You can request another code in: 60s</p>
        </CardContent>

        <CardFooter className="flex flex-col gap-9 p-0 pt-6">
          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 align-middle font-geist text-sm font-medium text-white hover:bg-blue-600"
          >
            Verify Code
          </Button>

          {/* Create Account */}
          <Link
            href="/register"
            className="align-middle font-geist text-sm font-medium leading-[100%] tracking-normal text-blue-600"
          >
            <span className="text-gray-500">Don’t have an account?</span> Create
            yours
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
