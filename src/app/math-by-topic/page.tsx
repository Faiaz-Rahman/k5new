import { Metadata } from 'next'
import MathByTopicPageClient from './page.client'

export const metadata: Metadata = {
    title: 'Math By Topic',
    description: 'This is the description of page Math by Topic.',
}

export default function PrintableWorksheet() {
    return (
        <>
            <MathByTopicPageClient />
        </>
    )
}
