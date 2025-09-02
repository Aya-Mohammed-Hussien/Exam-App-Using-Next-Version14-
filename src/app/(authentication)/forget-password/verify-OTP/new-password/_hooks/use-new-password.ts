import { useMutation } from "@tanstack/react-query";
import { NewPasswordAction } from "../_actions/new-password.action";
import { NewPasswordValue } from "@/lib/schemas/auth.schema";

export default function useNewPassword (){
    const {isPending , error , mutate} = useMutation({
        mutationFn: async (values:NewPasswordValue)=>{
         const response = await NewPasswordAction(values);
         console.log("newPasswordObject" , response);
         return response;
        }
    })
    return {isPending , error , setNewPassword:mutate}
}