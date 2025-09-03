"use server";

import { cookies } from "next/headers";

export async function resetSessionAction(sessionId: string) {
  cookies().set("reset-session", sessionId, {
    httpOnly: true,
    maxAge: 300,
    path: "/",
  });
}
