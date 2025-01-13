import { Metadata } from 'next'

import LoginClient from './page.client'

export const metadata: Metadata = {
    title: 'Login | WittyWorkbooks',
    description: 'This is the login page of Wittyworkbooks',
}

export default async function LoginServerComponent() {
    return (
        <>
            <LoginClient />
        </>
    )
}
