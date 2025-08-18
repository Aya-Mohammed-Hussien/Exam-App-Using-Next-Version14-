"use client";

import PasswordField from "@/components/shared/password-filed";
import UserDataField from "@/components/shared/user-data-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState <string | null>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect:false
    });
    if(response?.error){
     setError(response.error);
     return;
    }
   location.href= new URLSearchParams(location.search).get("callbackUrl") || "/";}

  return (
    <Card className="border-none shadow-none w-[28.25rem]">
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-4 p-0 mb-11">
          {/* email */}
          <UserDataField
            id="email"
            placeholder="user@example.com"
            type="email"
            label=" Email"
            name="email"
          />

          {/* Password */}
          <PasswordField id="password" label="Password" />
          <div className="flex items-center">
            <Link
              href="/forget-password"
              className="ml-auto inline-block text-blue-600 font-geist text-sm font-medium align-middle"
            >
              Forgot your password?
            </Link>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-9 p-0">
          {error && <p className="text-red-600">{error}</p>}
          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-600 font-geist text-sm font-medium align-middle text-white"
          >
            Login
          </Button>

          {/* Create Account */}
          <Link
            href="/register"
            className="text-blue-600 text-sm tracking-normal font-geist font-medium align-middle leading-[100%]"
          >
            <span className="text-gray-500">Don’t have an account?</span> Create
            yours
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
