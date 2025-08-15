"use client";

import PasswordField from "@/components/shared/password-filed";
import UserDataField from "@/components/shared/user-data-field";
import { CardContent } from "@/components/ui/card";

export default function RegisterForm() {
  return (
    <form>
      <CardContent className="flex flex-col gap-4 p-0">
        <div className="flex gap-3">
          {/* First Name */}
          <UserDataField id="first-name" placeholder="Ahmed" type="text" label="First name"/>


          {/* Last Name */}
          <UserDataField id="last-name" placeholder="Abdullah" type="text" label="Last name"/>

        </div>

        {/* Username */}
        <UserDataField id="username" placeholder="user123" type="text" label="Username"/>


        {/* email */}
        <UserDataField id="email" placeholder="user@example.com" type="email" label="Email"/>

        {/* Password */}
        <PasswordField id="password" label="Password"/>

        {/* Confirm Password */}
        <PasswordField id="confirmPassword" label="Confirm Password"/>
      </CardContent>
    </form>
  );
}
