import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google, Facebook],
    callbacks: {
        async session({ session, user, token }) {
            return session
        },
        async redirect({ url, baseUrl }) {
            // return url.startsWith(baseUrl) ? url : baseUrl + '/'
            return '/'
        },
    },
    secret: process.env.AUTH_SECRET,
})
