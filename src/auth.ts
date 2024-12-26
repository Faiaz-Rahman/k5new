import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
})

// 173129752049-h3lv4mvi3tq6u415ee9c17fg08m1ds37.apps.googleusercontent.com
// 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
