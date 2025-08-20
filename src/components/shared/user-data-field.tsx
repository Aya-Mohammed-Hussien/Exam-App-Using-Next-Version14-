// "use client"
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// type UserDataField = {
//   id : string , 
//   label : string ,
//   placeholder? : string , 
//   type: string ,
//   name?:string ,
  
// }
// export default function UserDataField({id  , label , placeholder , type , name , ...props } : UserDataField) {
  
//   return (
//     <div className="flex flex-1 flex-col">
//       <Label htmlFor={id} className="form-label">
//         {label}
//       </Label>
//       <Input id={id} className="form-input w-full mt-2" placeholder={placeholder} type={type} name={name} {...props} />
//     </div>
//   );
// }
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UserDataFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
  name?: string;
};


const UserDataField = React.forwardRef<HTMLInputElement, UserDataFieldProps>(
  ({ id, label, placeholder, type, ...props }, ref) => {
    return (
      <div className="flex flex-1 flex-col">
        <Label htmlFor={id} className="form-label">
          {label}
        </Label>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="form-input w-full mt-2 text-black"
          ref={ref} 
          {...props}
        />
      </div>
    );
  }
);

UserDataField.displayName = "UserDataField";

export default UserDataField;
