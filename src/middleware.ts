import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { toast, Toaster } from "react-hot-toast";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/sign-up";

  const token = request.cookies.get("token")?.value || "";
  console.log("Middleware token" ,token)

  if (isPublicPath && token) {
    return NextResponse.redirect(
      new URL("/dashboard", request.nextUrl)
    );
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/","/dashboard/:path*" ,"/calls-history", "/map"],
};