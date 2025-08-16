"use client";

import PasswordField from "@/components/shared/password-filed";
import UserDataField from "@/components/shared/user-data-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <Card className="border-none shadow-none w-[28.25rem]">
      <form>
        <CardContent className="flex flex-col gap-4 p-0 mb-11">
          <div className="flex gap-3">
            {/* First Name */}
            <UserDataField
              id="first-name"
              placeholder="Ahmed"
              type="text"
              label="First name"
            />

            {/* Last Name */}
            <UserDataField
              id="last-name"
              placeholder="Abdullah"
              type="text"
              label="Last name"
            />
          </div>

          {/* Username */}
          <UserDataField
            id="username"
            placeholder="user123"
            type="text"
            label="Username"
          />

          {/* email */}
          <UserDataField
            id="email"
            placeholder="user@example.com"
            type="email"
            label="Email"
          />

          {/* Password */}
          <PasswordField id="password" label="Password" />

          {/* Confirm Password */}
          <PasswordField id="confirmPassword" label="Confirm Password" />
        </CardContent>

        <CardFooter className="flex flex-col gap-9 p-0">
          {/* Register Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 font-geist text-sm font-medium align-middle text-white">
           Create Account
          </Button>
          {/* Already Having Account */}
          <Link href="/register" className="text-blue-600 text-sm tracking-normal font-geist font-medium align-middle leading-[100%]"><span className="text-gray-500">Already have an account? </span> Login</Link>

        </CardFooter>
      </form>
    </Card>
  );
}
