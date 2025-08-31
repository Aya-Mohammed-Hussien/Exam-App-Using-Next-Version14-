"use server";

import { getToken } from "@/lib/utils/get-token.util";

export async function DeleteAction() {
  const jwt = await getToken();
  if (!jwt?.accessToken) throw new Error("Unauthenticated user");
  const token = jwt.accessToken;
  console.log("reqToken", token);
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/auth/deleteMe`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token,
        },
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    const payload: ApiResponse<{}> = await response.json();
    if ("code" in payload) {
      console.log("Failed to delete account", payload.message);
      throw new Error(payload.message);
    }
    console.log("Successful updating data", payload.message);
    return payload;
  } catch (error) {
    throw error;
  }
}
