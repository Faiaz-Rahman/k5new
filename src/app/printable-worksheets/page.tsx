import { Metadata } from 'next'
import PrintableWorksheetsPageClient from './page.client'

export const metadata: Metadata = {
    title: 'Printable Worksheets | WittyWorkbooks',
    description:
        'This is the description of page Printable Worksheets',
}

export default function Page1() {
    return (
        <>
            <PrintableWorksheetsPageClient />
        </>
    )
}
