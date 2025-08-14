"use client";

import { EllipsisVertical, LogOut, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>
          <EllipsisVertical size={18} strokeWidth={1.25} color="#6b7280" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="top" sideOffset={20}>
        <DropdownMenuSeparator />

        {/* Account Settings */}
        <DropdownMenuItem className="p-4 border-b-2 border-gray-100 h-10 w-[16.5rem]">
          <Link
            href="/account-settings"
            className="text-gray-800 flex items-center justify-center gap-2 ">
            <UserRound size={18} strokeWidth={1.2} />
            <span className="font-geist text-sm font-normal align-middle">Account</span>
          </Link>
        </DropdownMenuItem>

        {/* Logout */}
        <DropdownMenuItem className="p-4 h-10 w-[16.5rem]">
          <button className="text-red-600 flex justify-center items-center gap-2">
            <LogOut size={18} style={{ transform: "rotate(180deg)" }} strokeWidth={1.2} />
             <span className="font-geist text-sm font-normal align-middle">Logout</span>
          </button>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
