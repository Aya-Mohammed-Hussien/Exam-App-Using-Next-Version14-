"use client"

import { GraduationCap, UserRound } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavigationLinks() {
const pathname = usePathname();
  return (
      <nav className="flex flex-col gap-3">
        {/* Diplomas */}
        <Link href="/" className={`nav-link ${pathname === "/" ? "nav-active":"text-gray-500"}`}>
          <GraduationCap className="w-6 h-6" /> 
          <span className="text-base font-normal">
            Diplomas
          </span>
        </Link>
        {/* Account-Settings */}
        <Link href="/account-settings" className={`nav-link ${pathname === "/account-settings" ?"nav-active":"text-gray-500"}`}>
          <UserRound className="w-6 h-6" /> 
          <span className="text-base font-normal">
            Account Settings
          </span>
        </Link>
      </nav>
  )
}
