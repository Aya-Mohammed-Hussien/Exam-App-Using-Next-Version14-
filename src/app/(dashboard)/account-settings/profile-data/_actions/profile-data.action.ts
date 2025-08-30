"use server";

import { ProfileDataValues } from "@/lib/schemas/auth.schema";
import { ProfileDataResponse } from "@/lib/types/auth";
import { getToken } from "@/lib/utils/get-token.util";

export async function ProfileDataAction(data: ProfileDataValues) {
  const jwt = await getToken();
  if (!jwt?.accessToken) throw new Error("Unauthenticated user");
  const token = jwt.accessToken;
  console.log("reqToken", token);
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
