"use server";

import { ProfileDataValues } from "@/lib/schemas/auth.schema";
import { ProfileDataResponse } from "@/lib/types/auth";
import { requireAccessToken } from "@/lib/utils/get-access-token.util";

export async function ProfileDataAction(data: ProfileDataValues) {
  const token = await requireAccessToken();
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/auth/editProfile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify(data),
      },
    );
    const payload: ApiResponse<ProfileDataResponse> = await response.json();
    if ("code" in payload) {
      console.log("Failed to update profile", payload.message);
      throw new Error(payload.message);
    }
    console.log("Successful updating data", payload.message);
    return payload;
  } catch (error) {
    throw error
  }
}
