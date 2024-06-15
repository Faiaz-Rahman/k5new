import React from 'react'

interface ButtonProps {
    title: string
    onPress: () => void
    width: number
}

export default function Button({
    title,
    onPress,
    width,
}: ButtonProps) {
    return (
        <button
            className="h-10 px-6  bg-[--button-primary] rounded-full
            font-bold text-xs
        "
            style={{
                width,
            }}
        >
            {title}
        </button>
    )
}
