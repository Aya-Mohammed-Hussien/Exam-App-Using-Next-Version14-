"use client"

import { GraduationCap, UserRound } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {paths , accountSettings} from "../../../../lib/constants/app-paths"

export default function NavigationLinks() {
const pathname = usePathname();


  return (
      <nav className="flex flex-col gap-3">
        {/* Diplomas */}
        <Link href={paths.home} className={`nav-link ${pathname === paths.home ? "nav-active":"text-gray-500"}`}>
          <GraduationCap size={24} strokeWidth={1.2} /> 
          <span className="text-base font-normal">
            Diplomas
          </span>
        </Link>
        {/* Account-Settings */}
        <Link href={accountSettings} className={`nav-link ${pathname ===accountSettings  ?"nav-active":"text-gray-500"}`}>
          <UserRound size={24} strokeWidth={1.2} /> 
          <span className="text-base font-normal">
            Account Settings
          </span>
        </Link>
      </nav>
  )
}
