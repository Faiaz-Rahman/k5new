'use client'

export default function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div
            className="pt-24 w-screen h-screen bg-white flex 
            justify-center
            items-center
        "
        >
            <p
                className="text-black font-semibold
                text-sm
            "
            >
                {error.message}
            </p>
        </div>
    )
}
