"use server";

import { NewPasswordValue } from "@/lib/schemas/auth.schema";
import { ChangePasswordResponse } from "@/lib/types/auth";

export async function NewPasswordAction(data: NewPasswordValue) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/auth/resetPassword`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const payload: ApiResponse<ChangePasswordResponse> = await response.json();
    if ("code" in payload) {
      console.log("failed to reset password", payload.message);
      throw new Error(payload.message);
    }
    return payload;
  } catch (error) {
    throw error;
  }
}
