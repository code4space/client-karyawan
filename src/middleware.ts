import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    // const pathname = req.nextUrl.pathname

    // console.log(pathname, req.nextUrl, '==')
    // const token = req.cookies.get('myCookieName')
    // if (!token && pathname !== '/') {
    //     const url = new URL('/login', req.url)
    //     return NextResponse.redirect(url)
    // }

    return res
}

export const config = {
    matcher: "/((?!login|_next/static|_next/image).*)"
}