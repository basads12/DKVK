import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const redirects: Record<string, string> = {
  "/reserveren": "/cheque",
  "/reviews": "/",
  "/omruilen": "/afspraak/omruilen",
};

export function proxy(request: NextRequest) {
  const destination = redirects[request.nextUrl.pathname];
  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/reserveren", "/reviews", "/omruilen"],
};
