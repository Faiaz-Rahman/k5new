import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req: Request) {
    const token = await getToken({
        req,
        secret: process.env.AUTH_SECRET,
    })
    const response = NextResponse.next()

    if (token) {
        response.cookies.set('isLoggedIn', 'true', {
            httpOnly: true,
            sameSite: 'strict',
            path: '/',
        })
    } else {
        response.cookies.set('isLoggedIn', 'null', {
            httpOnly: true,
            sameSite: 'strict',
            path: '/',
        })
    }

    return response
}

export const config = {
    matcher: '/api/auth/:path*',
}
