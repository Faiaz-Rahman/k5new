import React from 'react'

interface CardProps {
    title: string
}

export default function Card({ title }: CardProps) {
    return (
        <div className="flex flex-col items-center">
            <p
                className="text-[12px] font-medium text-black
                mb-[20px]
            "
            >
                {title}
            </p>
            <div className="h-[292px] w-[100%] bg-[--card] mb-16">
                <div
                    className="h-[50%] w-full flex items-center
                justify-center bg-[--card-top] text-white
                text-2xl
            "
                >
                    By Grade
                </div>
                <div
                    className="h-[50%] w-full flex items-center justify-center
                text-2xl text-black
            "
                >
                    By Topic
                </div>
            </div>
        </div>
    )
}
