"use client"
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
  size: number;               
  className?: string;          
};

export default function LogoutButton({ size, className }: LogoutButtonProps) {
  return (
    <Button onClick={()=>signOut({callbackUrl:"/login"})}
      className={`flex justify-start items-center gap-2 text-red-600 ${className || ""}`}
    >
      <LogOut size={size} style={{ transform: "rotate(180deg)" }} strokeWidth={1.2} />
      <span className="font-geist font-normal align-middle">Logout</span>
    </Button>
  );
}