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
    // console.log('session from layout =>', session?.user)

    const signOutSocialLogin = async () => {
        'use server'

        await signOut()
    }

    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <SessionProvider>
                        <Head
                            signOutSocialLogin={signOutSocialLogin}
                        />
                        {children}
                        <Footer />
                    </SessionProvider>
                </StoreProvider>
            </body>
        </html>
    )
}
