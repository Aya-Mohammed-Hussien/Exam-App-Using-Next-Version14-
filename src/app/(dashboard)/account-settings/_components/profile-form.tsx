"use client";
import React from "react";
import { PhoneInput } from "@/components/shared/phone-input";
import UserDataField from "@/components/shared/user-data-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useSession } from "next-auth/react";

export default function ProfileForm() {
  const { data: session } = useSession();




  return (
    <Card className="border-none shadow-none">
      <form>
        <CardContent className="flex flex-col gap-4 p-0 mb-11">
          <div className="flex flex-row gap-3">
            <UserDataField
              id="first-name"
              type="text"
              label="First Name"
            />
            <UserDataField
              id="last-name"
              type="text"
              label="Last Name"
            />
          </div>

          <UserDataField
            id="username"
            type="text"
            label="Username"
          />

          <UserDataField
            id="email"
            type="email"
            label="Email"
          />

          {/* Phone */}
          <PhoneInput label="Phone" id="phone" type="tel" name="phone" />
        </CardContent>

        <CardFooter className="flex gap-4 p-0">
          <Button
            type="submit"
            className="w-full bg-red-50 font-geist text-sm font-medium align-middle text-red-600"
          >
            Delete My Account
          </Button>

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
