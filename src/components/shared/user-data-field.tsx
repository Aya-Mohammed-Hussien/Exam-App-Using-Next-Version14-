"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PasswordField = {
  id : string , 
  label : string ,
  placeholder : string , 
  type : string ,
}
export default function UserDataField({id  , label , placeholder , type} : PasswordField) {
  
  return (
    <div className="flex flex-1 flex-col">
      <Label htmlFor={id} className="form-label">
        {label}
      </Label>
      <Input id={id} className="form-input w-full" placeholder={placeholder} type={type}/>
    </div>
  );
}
