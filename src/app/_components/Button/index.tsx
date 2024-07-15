import React from 'react'

interface ButtonProps {
    title: string
    onPress: () => void
    width?: number
    wrapperStyle?: Object
    wrapperTStyle?: string
}

export default function Button({
    title,
    onPress,
    width,
    wrapperStyle,
    wrapperTStyle,
}: ButtonProps) {
    return (
        <button
            className={`h-10 px-6  bg-[--button-primary] 
            rounded-full font-bold text-xs ${wrapperTStyle} 
        `}
            style={{ width, ...wrapperStyle }}
        >
            {title}
        </button>
    )
}
