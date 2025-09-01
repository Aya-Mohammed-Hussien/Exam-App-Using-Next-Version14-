"use client"

import { Button } from "@/components/ui/button"
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation"

export default function ArrowBack() {
    const router = useRouter();
  return (
    <Button className="border-gray-200 border-2 w-10 h-10 mb-10" onClick={()=>{router.back()}}> 
      <MoveLeft size={24}/>
    </Button>
  )
}
