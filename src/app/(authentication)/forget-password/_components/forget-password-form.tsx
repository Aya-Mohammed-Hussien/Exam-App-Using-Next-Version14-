"use client"

import UserDataField from "@/components/shared/user-data-field"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MoveRight } from "lucide-react"
import Link from "next/link"

export default function ForgetPasswordForm() {
  return (
     <Card className="border-none shadow-none w-[28.25rem]">
        <form>
          <CardContent className="p-0 mb-4">

            {/* email */}
            <UserDataField
              id="email"
              placeholder="user@example.com"
              type="email"
              label=" Email"
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-9 p-0 pt-6">
            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-600 font-geist text-sm font-medium align-middle text-white"
            >
             Continue
             <MoveRight size={18} />
            </Button>

            {/* Create Account */}
            <Link
              href="/register"
              className="text-blue-600 text-sm tracking-normal font-geist font-medium align-middle leading-[100%]"
            >
              <span className="text-gray-500">Don’t have an account?</span>{" "}
              Create yours
            </Link>
          </CardFooter>
        </form>
      </Card>
  )
}
