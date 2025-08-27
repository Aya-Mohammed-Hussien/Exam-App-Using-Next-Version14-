"use client";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

type PasswordFieldProps = React.ComponentProps<typeof Input> ;

const PasswordField = React.forwardRef<HTMLInputElement , PasswordFieldProps>(
  ({ className, ...props }, ref) => {
const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisiblity = () => setShowPassword(!showPassword);

  return (
    <div className="relative mt-2">
      <Input
      ref={ref}
        {...props}
        className={className}
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder ?? "********"}
      />
      <Button
        type="button"
        onClick={togglePasswordVisiblity}
        variant="ghost"
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        {showPassword ? (
          <Eye size={18} color="#9ca3af" />
        ) : (
          <EyeOff size={18} color="#9ca3af" />
        )}
      </Button>
    </div>
  ); 
})

PasswordField.displayName = "PasswordField";

export default PasswordField;

