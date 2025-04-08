"use server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("_wee_url")?.value || null;
  const requestedPath = request.nextUrl.pathname;
  // If non-logged in user tries to access dashboard, redirect to login page
  if (
    requestedPath.startsWith("/dashboard") ||
    requestedPath.startsWith("/user")
  ) {
    if (!accessToken) {
      return Response.redirect(
        new URL(`/auth/login?redirect_path=${requestedPath}`, request.url)
      );
    }
  }

  // If logged in user tries to access login or signup page, redirect to dashboard
  if (
    requestedPath.startsWith("/auth/login") ||
    requestedPath.startsWith("/auth/signup")
  ) {
    if (accessToken) {
      return Response.redirect(new URL("/dashboard", request.url));
    }
  }

  return null;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|login|registration|error).*)",
  ],
};
