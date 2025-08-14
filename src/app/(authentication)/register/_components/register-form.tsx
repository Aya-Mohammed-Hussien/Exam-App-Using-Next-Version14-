"use client";

import Email from "@/components/shared/email";
import FirstName from "@/components/shared/first-name";
import LastName from "@/components/shared/last-name";
import Username from "@/components/shared/username";
import { CardContent } from "@/components/ui/card";

export default function RegisterForm() {
  return (
    <form>
      <CardContent className="flex flex-col gap-4 p-0">
        <div className="flex gap-3">
          {/* First Name */}
          <FirstName />

          {/* Last Name */}
          <LastName />
        </div>

        {/* Username */}
        <Username />

        {/* email */}
        <Email />
      </CardContent>
    </form>
  );
}
