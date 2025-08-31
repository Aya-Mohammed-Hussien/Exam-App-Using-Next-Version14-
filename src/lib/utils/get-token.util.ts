import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";
export async function getToken() {
  const tokenCookie = cookies().get("next-auth.session-token")?.value;
  if (!tokenCookie) return null;
  try {
    const jwt = await decode({
      token: tokenCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });
    console.log("function to get token", jwt?.accessToken);
    return jwt;
  } catch (error) {
    console.log(error);
    return null;
  }
}
