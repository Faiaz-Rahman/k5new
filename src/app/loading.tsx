import { Loader2 } from 'lucide-react'
import React from 'react'

export default function LoadingUI() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Loader2 className="text-black h-[2.5rem] w-[2.5rem] animate-spin repeat-infinite" />
        </div>
    )
}
