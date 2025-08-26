"use server";

import { registerValues } from "@/lib/schemas/auth.schema";
import { LoginResponse } from "@/lib/types/auth";

export async function registerAction(data: registerValues) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const payload: ApiResponse<LoginResponse> = await response.json();
    if ("code" in payload) {
      console.log("failed signup", payload.message);
      throw new Error(payload.message);
    }
    console.log("Successful signup" , payload.message);
    return payload;
  } catch (error) {
    throw error;
  }
}
