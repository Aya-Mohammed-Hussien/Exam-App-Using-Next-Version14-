"use client";

import PasswordField from "@/components/shared/password-filed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function UpdatePasswordForm() {
  //Form
  const form = useForm();
  //Mutations

  //Function

  return (
    <Form {...form}>
      <Card className="w-[28.25rem] border-none shadow-none">
        <form>
          <CardContent className="flex flex-col gap-4 mb-4 p-0">
            {/* New Password */}
            <FormField
              name="password" 
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>New Password</FormLabel>
                  {/* Field */}
                  <FormControl>
                    <PasswordField {...field} />
                  </FormControl>
                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm New Password */}
            <FormField
              name="rePassword"
              render={({ field, fieldState }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Confirm New Password</FormLabel>
                  {/* Field */}
                  <FormControl>
                    <PasswordField {...field} />
                  </FormControl>
                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-9 p-0 pt-6">
            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 align-middle font-geist text-sm font-medium text-white hover:bg-blue-600"
            >
              Update Password
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Form>
  );
}
