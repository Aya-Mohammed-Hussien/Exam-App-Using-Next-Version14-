import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login", "/register", "/forget-password"];

// Redirect to login function
function redirectToLogin(req: NextRequest) {
  const url = new URL("/login", req.nextUrl.origin);
  return NextResponse.redirect(url);
}

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;
  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  if (!token && !isPublic) {
    return redirectToLogin(req);
  }
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};