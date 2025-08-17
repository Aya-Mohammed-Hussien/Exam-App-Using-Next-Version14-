"use client";

import PasswordField from "@/components/shared/password-filed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ChangePasswordForm() {
  return (
    <Card className="border-none shadow-none">
      <form>
        <CardContent className="flex flex-col p-0 mb-8">
          {/*Current Password */}
          <PasswordField id="currentPassword" label="Current Password" />

          <div className="flex flex-col gap-4 mt-10">
            {/* New Password */}
            <PasswordField id="newPassword" label="New Password" />

            {/* Confirm New Password */}
            <PasswordField id="newPassword" label="Confirm New Password" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col p-0">
          {/* Update Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 font-geist text-sm font-medium align-middle text-white"
          >
            Update Password
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
