"use client";

import { PhoneInput } from "@/components/shared/phone-input";
import UserDataField from "@/components/shared/user-data-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProfileForm() {
  return (
    <Card className="border-none shadow-none">
      <form>
        <CardContent className="flex flex-col gap-4 p-0 mb-11">
          <div className="flex flex-row gap-3">
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

          {/* Phone */}
          <PhoneInput label="Phone" id="phone" type="tel" />
        </CardContent>

        <CardFooter className="flex gap-4 p-0">
          {/* Save Changes Button */}
          <Button
            type="submit"
            className="w-full bg-red-50 font-geist text-sm font-medium align-middle text-red-600"
          >
            Delete My Account
          </Button>

          {/* Delete Account Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 font-geist text-sm font-medium align-middle tracking-normal text-white leading-[100%]"
          >
            Save Changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
