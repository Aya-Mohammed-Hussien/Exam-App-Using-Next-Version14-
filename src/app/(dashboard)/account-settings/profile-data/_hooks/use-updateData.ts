import { ProfileDataValues } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { ProfileDataAction } from "../_actions/profile-data.action";

export default function UseUpdateData() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: ProfileDataValues) => {
      console.log(values);
      const response = await ProfileDataAction(values);
      return response;
    },
  });
  return { isPending, error, updateData: mutate };
}
