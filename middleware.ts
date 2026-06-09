import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/satranc-testleri' || pathname.startsWith('/satranc-testleri/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/satranc-testleri/, '/chess-tests');
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/satranc-testleri', '/satranc-testleri/:path*'],
};
