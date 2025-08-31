import { getToken } from "./get-token.util";

export async function requireAccessToken(): Promise<string> {
  const jwt = await getToken();
  if (!jwt?.accessToken) throw new Error("Unauthenticated user");
  return jwt.accessToken;
}
