import { redirect } from "next/navigation";
import { getToken } from "./get-token.util";

export async function requireAccessToken(): Promise<string> {
  const jwt = await getToken();
  if (!jwt?.accessToken) {
    redirect("/login");
  }
  return jwt.accessToken;
}
