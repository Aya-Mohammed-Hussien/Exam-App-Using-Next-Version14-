"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PasswordField = {
  id : string , 
  label : string ,
  placeholder : string , 
  type : string ,
  name:string
}
export default function UserDataField({id  , label , placeholder , type , name} : PasswordField) {
  
  return (
    <div className="flex flex-1 flex-col">
      <Label htmlFor={id} className="form-label">
        {label}
      </Label>
      <Input id={id} className="form-input w-full mt-2" placeholder={placeholder} type={type} name={name}/>
    </div>
  );
}
