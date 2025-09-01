"use server";

import { ForgetPasswordValue } from "@/lib/schemas/auth.schema";
import { ForgetPasswordResponse } from "@/lib/types/auth";

export async function forgetPasswordAction(data: ForgetPasswordValue) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/auth/forgotPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const payload: ApiResponse<ForgetPasswordResponse> = await response.json();
    if ("code" in payload) {
      console.log("failed to send to OTP step", payload.message);
      throw new Error(payload.message);
    }
    console.log("Successfully sent OTP", payload.message);
    return payload;
  } catch (error) {
    throw error;
  }
}
