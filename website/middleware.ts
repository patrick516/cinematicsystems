import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  // Allow maintenance page itself to load
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/maintenance")) {
    return NextResponse.next();
  }

  // Allow static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/icons")
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to maintenance page
  if (maintenance) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
