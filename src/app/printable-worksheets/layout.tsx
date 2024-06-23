'use client'

export default function PrintableWorksheetLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className="w-screen pt-40 pl-24
                pr-24
            "
            >
                {children}
            </div>
        </>
    )
}
