import React from 'react'

interface ButtonProps {
    title: string
    onPress: () => void
    width?: number
    wrapperStyle?: Object
    wrapperTStyle?: string
    leftIcon?: React.ReactNode
}

export default function Button({
    title,
    onPress,
    width,
    wrapperStyle,
    wrapperTStyle,
    leftIcon,
}: ButtonProps) {
    return (
        <button
            onClick={onPress}
            className={`h-10 px-6  bg-[--button-primary] 
            rounded-full font-bold text-xs ${wrapperTStyle} 
        `}
            style={{ width, ...wrapperStyle }}
        >
            {leftIcon ? (
                <div
                    className="h-6 w-6 bg-white
                rounded-full flex justify-center 
                items-center mr-2       
            "
                >
                    {leftIcon}
                </div>
            ) : null}
            {title}
        </button>
    )
}
