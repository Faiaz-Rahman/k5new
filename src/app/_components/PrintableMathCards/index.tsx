import React from 'react'

interface PrintableMathCardProps {
    title?: string
    worksheets?: string[]
}

export default function PrintableMathCards({
    title,
    worksheets,
}: PrintableMathCardProps) {
    return (
        <div className="w-full h-72 bg-[--card] pt-8 rounded-lg">
            <div className="flex justify-center">
                <p className="text-black text-[25px] font-medium">
                    {title}
                </p>
            </div>

            <div className="mt-6 pl-10 flex flex-col gap-3">
                {worksheets?.map((item, index) => {
                    return (
                        <p
                            className="text-black text-sm font-regular"
                            key={index}
                        >
                            {index + 1}. {item}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}
