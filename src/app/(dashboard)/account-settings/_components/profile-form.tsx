"use client";
import React from "react";
import { PhoneInput } from "@/components/shared/phone-input";
import UserDataField from "@/components/shared/user-data-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Session } from "next-auth";

type ProfileFormProps = {
user : Session
} ;
export default function ProfileForm({user}:ProfileFormProps ) {
const { register, handleSubmit , getValues } = useForm({
  defaultValues: {
    firstName:user.firstName ??"" ,
    lastName: user.lastName??"",
    username: user.username??"",
    email: user.email??"",
    phone: user.phone ??"",
  },
});
console.log("Default values:", getValues());
 const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  return (
    <Card className="border-none shadow-none">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-4 p-0 mb-11">
          <div className="flex flex-row gap-3">
            {/* First Name */}
            <UserDataField
              id="first-name"
              type="text"
              label="First Name"
              {...register("firstName")}
            />

            {/* Last Name */}
            <UserDataField
              id="last-name"
              type="text"
              label="Last Name"
              {...register("lastName")}
            />
          </div>

           {/* Username */}
          <UserDataField
            id="username"
            type="text"
            label="Username"
            {...register("username")}
          />

          {/* Email */}
          <UserDataField
            id="email"
            type="email"
            label="Email"
            {...register("email")}
          />

          {/* Phone */}
          <PhoneInput label="Phone" id="phone" type="tel" {...register("phone")} />
        </CardContent>

        <CardFooter className="flex gap-4 p-0">
          {/* Delete Account Button */}
          <Button
            type="submit"
            className="w-full bg-red-50 font-geist text-sm font-medium align-middle text-red-600"
          >
            Delete My Account
          </Button>

         {/* Save Changes Button */}
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
