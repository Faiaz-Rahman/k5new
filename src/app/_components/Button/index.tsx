import React from 'react'
import { Oval } from 'react-loader-spinner'

interface ButtonProps {
    title: string
    onPress: () => void
    width?: number
    wrapperStyle?: Object
    wrapperTStyle?: string
    leftIcon?: React.ReactNode
    isLoading?: boolean
}

export default function Button({
    title,
    onPress,
    width,
    wrapperStyle,
    wrapperTStyle,
    leftIcon,
    isLoading,
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
            {isLoading ? (
                <div className="w-full h-full flex justify-center items-center">
                    <Oval
                        visible={true}
                        height="27"
                        width="27"
                        color="#627ddb"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        strokeWidth={7}
                        secondaryColor="#474e7f"
                    />
                </div>
            ) : (
                title
            )}
        </button>
    )
}
