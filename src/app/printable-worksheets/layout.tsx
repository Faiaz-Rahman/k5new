'use client'

export default function PrintableWorksheetLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className="w-screen pt-24 pl-[20px]
                pr-[20px]
                lg:pl-24 lg:pr-24 lg:pt-40
            "
            >
                {children}
            </div>
        </>
    )
}
