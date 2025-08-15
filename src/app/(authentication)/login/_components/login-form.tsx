"use client";

import PasswordField from "@/components/shared/password-filed";
import UserDataField from "@/components/shared/user-data-field";
import { CardContent } from "@/components/ui/card";

export default function LoginForm() {
  return (
    <form>
      <CardContent className="flex flex-col gap-4 p-0">
        {/* email */}
        <UserDataField id="email" placeholder="user@example.com" type="email" label=" Email"/>

        {/* Password */}
        <PasswordField id="password" label="Password"/>
      </CardContent>
    </form>
  );
}
