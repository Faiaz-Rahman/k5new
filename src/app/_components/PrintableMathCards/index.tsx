import React from 'react'

interface PrintableMathCardProps {
    title: string
    worksheets: string[]
}

export default function PrintableMathCards({
    title,
    worksheets,
}: PrintableMathCardProps) {
    return (
        <div className="w-full pb-10 bg-[--card] pt-8 rounded-lg">
            <div className="flex justify-center">
                <p className="text-black text-[25px] font-medium">
                    {title}
                </p>
            </div>

            <div
                className="mt-6 pl-[20px] flex flex-col gap-3 pr-[15px]
                lg:pl-10
            "
            >
                {worksheets?.map((item, index) => {
                    return (
                        <p
                            className="text-black text-sm font-regular
                            "
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
