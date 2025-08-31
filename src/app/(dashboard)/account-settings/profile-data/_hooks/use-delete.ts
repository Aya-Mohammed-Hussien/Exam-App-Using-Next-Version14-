import { useMutation } from "@tanstack/react-query";
import { DeleteAction } from "../_actions/delete-account.action";

export default function UseDeleteAccount() {
  const { error, isPending, mutateAsync } = useMutation({
    mutationFn: DeleteAction,
  });
  return { isPending, error, deleteAccount: mutateAsync};
}
