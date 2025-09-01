import { VerifyCodeValue } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { VerifyOTPAction } from "../_actions/verify-otp.action";

export default function useVerifyCode() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: VerifyCodeValue) => {
      const response = await VerifyOTPAction(values);
      console.log(response) ;
      return response ;
    },
  });
  return {isPending , error , verifyOTP:mutate}
}
