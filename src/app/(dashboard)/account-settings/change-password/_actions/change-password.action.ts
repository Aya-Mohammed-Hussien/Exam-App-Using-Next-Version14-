"use server";

import { ChangePasswordValues } from "@/lib/schemas/auth.schema";
import { ChangePasswordResponse } from "@/lib/types/auth";
import { getToken } from "@/lib/utils/get-token.util";

export async function ChangePasswordAction(data: ChangePasswordValues) {
  const jwt = await getToken();
  if (!jwt?.accessToken) throw new Error("Unauthenticated user");
  const token = jwt.accessToken;
  console.log("req token", token);
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
