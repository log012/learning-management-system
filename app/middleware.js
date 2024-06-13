import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: 'jwtsecret'});

    if (!token) {
        return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    const { pathname } = req.nextUrl;
    if (pathname.startsWith('/admin') && token.role !== 'admin') {
        return NextResponse.redirect(new URL('/403', req.url));  // Redirect to a 403 Forbidden page
    }

    return NextResponse.next();
}

export const config={
    matcher: ['/admin/:path*','/user/:path*'],
}