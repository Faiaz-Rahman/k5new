import { Metadata } from 'next'
import PageClient from './page.client'

export const metadata: Metadata = {
    title: 'Page1',
    description: 'This is the description of Page1',
}

export default function Page1() {
    return (
        <>
            <PageClient />
        </>
    )
}
