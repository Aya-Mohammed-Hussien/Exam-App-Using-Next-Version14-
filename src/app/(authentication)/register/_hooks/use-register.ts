import { RegisterValues } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../_actions/register.action";

export default function useRegister() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: RegisterValues) => {
      console.log(values);
      const response = await registerAction(values);
      console.log(response);
      location.href = "/login";
    },
  });
  return { isPending, error, register: mutate };
}
