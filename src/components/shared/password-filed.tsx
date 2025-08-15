"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type PasswordField = {
  id : string , 
  label : string 
}
export default function PasswordField({id  , label } : PasswordField) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisiblity = ()=>{
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <Label htmlFor={id} className="form-label">
        {label}
      </Label>
      <div className="relative">
      <Input id={id} className="form-input" placeholder="********" type="password"/>
      <Button type="button" onClick={togglePasswordVisiblity} variant="ghost" className="absolute right-0 top-0">
        {showPassword ?<Eye size={18} color="#9ca3af"/>  :<EyeOff size={18} color="#9ca3af"/>}
      </Button>
      </div>
    </div>
  );
}
