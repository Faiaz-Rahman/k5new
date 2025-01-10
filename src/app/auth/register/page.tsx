import { Metadata } from 'next'
import Register from './page.client'
import { auth, signIn } from '@/auth'

export const metadata: Metadata = {
    title: 'Register | WittyWorkbooks',
    description: 'This is the login page of Wittyworkbooks',
}

export default async function RegisterServerComponent() {
    const session = await auth()

    const signInWithProvider = async (signInType: string) => {
        'use server'

        await signIn(signInType)
        const updatedSession = await auth()

        return updatedSession
    }

    return (
        <>
            <Register
                doSignIn={signInWithProvider}
                session={session}
            />
        </>
    )
}
