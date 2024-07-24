import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from './_components/Header'
import Footer from './_components/Footer'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'WittyWorkbooks',
    description: 'This is a learning website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <Head />
                    {children}
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    )
}
