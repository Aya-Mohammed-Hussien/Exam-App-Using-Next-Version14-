import { LoginValues } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

export default function useLogin() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: LoginValues) => {
      console.log(values);
      const response = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (response?.error) {
        throw new Error(response.error);
      }
      const callbackUrl = new URLSearchParams(location.search).get("callbackUrl");
      window.location.href = callbackUrl || "/";
    },
  });

  return { isPending, error, login: mutate };
}
