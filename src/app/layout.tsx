import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from './_components/Header'
import Footer from './_components/Footer'
import StoreProvider from './StoreProvider'
import { auth, signOut } from '@/auth'

import { SessionProvider } from 'next-auth/react'
import { cookies } from 'next/headers'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'WittyWorkbooks',
    description: 'This is a learning website',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const session = await auth()

    let cookieStore, isLoggedInValue

    if (session?.user) {
        cookieStore = await cookies()

        isLoggedInValue = cookieStore.get('isLoggedIn')?.value
        isLoggedInValue =
            isLoggedInValue === 'true' || !!session?.user
        console.log('cookie store value =>', isLoggedInValue)
    }

    const fetched_topic_names: Array<string> = []

    console.log('session from layout =>', session?.user)

    const signOutSocialLogin = async () => {
        'use server'
        console.log('calling signOutSocialLogin on layout')

        await signOut()
    }
    const response = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { grade: 'all' } }),
    })

    if (!response.ok) {
        console.log('error while calling the get api')
    } else {
        const responseJson: { topics: Array<string> } =
            await response.json()

        responseJson?.topics.map((item, _) => {
            fetched_topic_names.push(item)
        })
    }

    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <SessionProvider>
                        <Head
                            session={session}
                            topics={fetched_topic_names}
                            signOutSocialLogin={signOutSocialLogin}
                            isLoggedInUser={isLoggedInValue}
                        />
                        {children}
                        <Toaster />
                        <Footer />
                    </SessionProvider>
                </StoreProvider>
            </body>
        </html>
    )
}
