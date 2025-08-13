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
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        {/* Account Settings */}
        <DropdownMenuItem>
          <Link
            href="/account-settings"
            className="text-gray-800 font-geist text-sm font-normal flex items-center justify-center gap-2 ">
            <UserRound size={18} strokeWidth={1.2} />
            Account
          </Link>
        </DropdownMenuItem>


        {/* Logout */}
        <DropdownMenuItem >
          <button className="text-red-600 flex justify-center items-center gap-2">
            <LogOut size={18} style={{ transform: "rotate(180deg)" }} strokeWidth={1.2} />
             <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
