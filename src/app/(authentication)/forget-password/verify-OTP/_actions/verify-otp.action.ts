"use server";

import { VerifyCodeValue } from "@/lib/schemas/auth.schema";

export async function VerifyOTPAction(data: VerifyCodeValue) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/auth/verifyResetCode`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const payload: VerifyCodeResponse = await response.json();
    if ("code" in payload) {
      console.log("failed to verify code", payload.message);
      throw new Error(payload.message);
    }
    console.log("Successful code step", payload.status);
    return payload;
  } catch (error) {
    throw error;
  }
}
