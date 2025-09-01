import { ForgetPasswordValue } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { forgetPasswordAction } from "../_actions/forget-password.action";

export default function useForgetPassword() {
  const { isPending, mutate, error } = useMutation({
    mutationFn: async (values: ForgetPasswordValue) => {
      const response = await forgetPasswordAction(values);
      console.log(response);
      return response ; 
    },
  });
  return {isPending , error , forgetPassword:mutate}
}
