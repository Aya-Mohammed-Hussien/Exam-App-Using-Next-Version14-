"use client";
import React, { useEffect } from "react";
import { PhoneInput } from "@/components/shared/phone-input";
import UserDataField from "@/components/shared/user-data-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Session } from "next-auth";



type ProfileFormProps = {
   userData: Session 
};

export default function ProfileForm({ userData }: ProfileFormProps) {
  console.log(userData);
  const { register, handleSubmit, getValues , reset} = useForm({
    defaultValues: {
      firstName :"",
      lastName: "" ,
      username: "",
      email: "" ,
      phone: "" 
    },
  });
  console.log("Default values:", getValues());

  useEffect(() => {
    if (userData) {
      reset({
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
      });
    }
  }, [userData, reset]);


  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  // const [isDataReady, setIsDataReady] = useState(false);

  // // Use useEffect to update the state once userData is available
  // useEffect(() => {
  //   if (userData) {
  //     setIsDataReady(true);
  //   }
  // }, [userData]);

  // const { register, handleSubmit, reset, getValues } = useForm({
  //   defaultValues: {
  //     firstName: userData?.firstName || "",
  //     lastName: userData?.lastName || "",
  //     username: userData?.username || "",
  //     email: userData?.email || "",
  //     phone: userData?.phone || "",
  //   },
  // });

  // // Use another useEffect to reset the form if the data changes after initial load
  // useEffect(() => {
  //   if (userData && isDataReady) {
  //     reset(userData);
  //   }
  // }, [userData, isDataReady, reset]);

  // const onSubmit = (data: any) => {
  //   console.log("Form data:", data);
  // };

  // // Conditionally render the form only when the data is ready
  // if (!isDataReady) {
  //   return <div>Loading profile data...</div>; // Or a skeleton loader
  // }


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
          <PhoneInput
            label="Phone"
            id="phone"
            type="tel"
          />
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
