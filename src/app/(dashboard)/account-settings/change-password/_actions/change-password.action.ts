"use server";

import { ChangePasswordValues } from "@/lib/schemas/auth.schema";
import { ChangePasswordResponse } from "@/lib/types/auth";
import { requireAccessToken } from "@/lib/utils/get-access-token.util";

export async function ChangePasswordAction(data: ChangePasswordValues) {
  const token = await requireAccessToken();
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/auth/changePassword`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify(data),
      },
    );
    const payload: ApiResponse<ChangePasswordResponse> = await response.json();
    if ("code" in payload) {
      console.log("Failed to change password", payload.message);
      throw new Error(payload.message);
    }
    console.log("Successful changePassword", payload.message);
    return payload;
  } catch (error) {
    throw error;
  }
}
