import { DiplomaSuccessResponse } from "../types/diplomas";
import { requireAccessToken } from "../utils/get-access-token.util";

export async function getDiplomas() {
  const token = await requireAccessToken();
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/subjects`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token,
        },
      },
    );
    const payload :ApiResponse<DiplomaSuccessResponse> = await response.json() ;
    if ("code" in payload) {
        console.log("Failed to fetch diplomas" , payload.message);
        throw new Error (payload.message);
    }
    console.log("Successful diplomas fetch" , payload.message);
    return payload.subjects;
  } catch (error) {
    console.error("error in fetching diplomas", error);
    throw error
  }
}
