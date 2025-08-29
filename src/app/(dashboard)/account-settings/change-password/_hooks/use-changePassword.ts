import { ChangePasswordValues } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { ChangePasswordAction } from "../_actions/change-password.action";

export default function useChangePassword() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: ChangePasswordValues) => {
      console.log(values);
      const response = await ChangePasswordAction(values);
      return response;
    },
  });
  return { isPending, error, changePassword: mutate };
}
