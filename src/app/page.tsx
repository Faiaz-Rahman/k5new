import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen w-screen">
            <div
                className="ml-3 h-10 w-10 bg-red-500 
                transition-all relative group
        "
            >
                <div
                    className="h-0 w-36 bg-green-700 
                    absolute top-full group-hover:h-56 transition-all
                    duration-500
                "
                ></div>
            </div>
        </main>
    )
}
