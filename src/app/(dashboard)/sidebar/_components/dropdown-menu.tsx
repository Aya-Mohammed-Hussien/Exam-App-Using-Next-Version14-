"use client";

import { EllipsisVertical, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import LogoutButton from "@/components/shared/logout-button";

export default function DropDownMenu() {
  return (
    <DropdownMenu>

      {/* Dropdown icon */}
      <DropdownMenuTrigger>
          <EllipsisVertical size={18} strokeWidth={1.25} color="#6b7280" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="top" sideOffset={20}>
        <DropdownMenuSeparator />

        {/* Account Settings */}
        <DropdownMenuItem asChild className="p-4 border-b-2 border-gray-100 h-10 w-[16.5rem]">
          <Link
            href="/account-settings"
            className="text-gray-800 flex items-center gap-2 ">
            <UserRound size={18} strokeWidth={1.2} />
            <span className="font-geist text-sm font-normal align-middle">Account</span>
          </Link>
        </DropdownMenuItem>

        {/* Logout */}
        <DropdownMenuItem asChild >
          <LogoutButton size={18} className="p-4 h-10 w-[16.5rem] text-sm"/>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
