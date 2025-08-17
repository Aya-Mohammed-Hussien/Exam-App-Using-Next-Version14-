"use client"


import { CircleUserRound, Lock} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {paths} from "../../../../../lib/constants/app-paths"

export default function AccountSettingsNavigationLinks() {


const pathname = usePathname();
  return (
      <nav className="flex flex-col gap-3">
        {/* Profile */}
        <Link href={paths.accountSettings.root} className={`account-nav-link ${pathname === paths.accountSettings.root ? "account-nav-active":"text-gray-500"}`}>
           
          <CircleUserRound size={24} strokeWidth={1.2}/>
          <span className="text-base font-normal">
            Profile
          </span>
        </Link>
        
        {/*Change Password */}
        <Link href={paths.accountSettings.changePassword} className={`account-nav-link ${pathname === paths.accountSettings.changePassword  ?"account-nav-active":"text-gray-500"}`}>
          <Lock size={24} strokeWidth={1.2}/>
          <span className="text-base font-normal">
            Change Password
          </span>
        </Link>
      </nav>
  )
}
