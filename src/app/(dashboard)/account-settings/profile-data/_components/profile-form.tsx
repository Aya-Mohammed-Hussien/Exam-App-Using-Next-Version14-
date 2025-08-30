"use client";
import React from "react";
import { PhoneInput } from "@/components/shared/phone-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SubmitHandler, useForm } from "react-hook-form";
import { Session } from "next-auth";
import {
  profileDataSchema,
  ProfileDataValues,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import UseUpdateData from "../_hooks/use-updateData";
import { ProfileDataResponse } from "@/lib/types/auth";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormErrorMessage from "@/components/shared/form-error-message";
import { LoaderCircle } from "lucide-react";

// type ProfileFormProps = {
//   userData: Session;
// };

export default function ProfileForm() {
  const { toast } = useToast();
  // Form
  const form = useForm<ProfileDataValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(profileDataSchema),
  });
  const { isSubmitted, isValid } = form.formState;

  // Mutations
  const { isPending, error, updateData } = UseUpdateData();

  // Function
  const onSubmit: SubmitHandler<ProfileDataValues> = async (values) => {
    updateData(values, {
      onSuccess: (data: SuccessResponse<ProfileDataResponse>) => {
        if (data.message === "success") {
          toast({
            description: "Your profile has been updated",
            duration: 1500,
          });
        }
      },
    });
  };

  return (
    <Form {...form}>
      <Card className="border-none shadow-none">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="mb-11 flex flex-col gap-4 p-0">
            <div className="flex flex-row gap-3">
              {/* First Name */}
              <FormField
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      {/* Field */}
                      <Input
                        type="text"
                        {...field}
                        placeholder="Ahmed"
                        error={!!fieldState.error || !!error}
                      />
                    </FormControl>
                    {/* Message */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      {/* Field */}
                      <Input
                        type="text"
                        {...field}
                        placeholder="Abdullah"
                        error={!!fieldState.error || !!error}
                      />
                    </FormControl>
                    {/* Message */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Username */}
            <FormField
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <Input
                      type="text"
                      {...field}
                      placeholder="user123"
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            {/* email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <Input
                      type="email"
                      {...field}
                      placeholder="user@example.com"
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    {/* Field */}
                    <PhoneInput
                      {...field}
                      error={!!fieldState.error || !!error}
                    />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          {/* Error */}
          <FormErrorMessage error={error} />
          <CardFooter className="flex gap-4 p-0">
            {/* Delete Account Button */}
            <Button
              type="submit"
              className="w-full bg-red-50 align-middle font-geist text-sm font-medium text-red-600"
            >
              Delete My Account
            </Button>

            {/* Save Changes Button */}
            <Button
              disabled={isPending || (!isValid && isSubmitted)}
              type="submit"
              className="w-full bg-blue-600 align-middle font-geist text-sm font-medium leading-[100%] tracking-normal text-white"
            >
              {isPending ? (
                <div className="animate-spin">
                  <LoaderCircle />
                </div>
              ) : (
                "Save Changes"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Form>
  );
}

// const { register, handleSubmit, getValues, reset } = useForm({
//   defaultValues: {
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     phone: "",
//   },
// });
// console.log("Default values:", getValues());

// useEffect(() => {
//   if (userData) {
//     reset({
//       firstName: userData.firstName,
//       lastName: userData.lastName,
//       username: userData.username,
//       email: userData.email,
//       phone: userData.phone,
//     });
//   }
// }, [userData, reset]);

// const onSubmit = (data: any) => {
//   console.log("Form data:", data);
// };
