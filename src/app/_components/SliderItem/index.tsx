import React from 'react'

interface SliderItemProps {
    item: number
    transform: number
    height: number //How much is it going to translate?
    width: number
}

export default function SliderItem({
    item,
    transform,
    height,
    width,
}: SliderItemProps) {
    const image_assets_arr: string[] = [
        'https://www.mathworksheets4kids.com/worksheets/1st-grade/addition/graphics-upto10-preview.png',
        'https://www.mathworksheets4kids.com/worksheets/1st-grade/patterns/repeating-circle-preview.png',
        'https://www.mathworksheets4kids.com/worksheets/1st-grade/counting/read-write-1to25-preview.png',
        'https://www.mathworksheets4kids.com/worksheets/1st-grade/measurement/long-short-ordering-preview.png',
        'https://www.mathworksheets4kids.com/worksheets/1st-grade/time/telling-hourly-increment-preview.png',
        'https://www.mathworksheets4kids.com/worksheets/1st-grade/geometry/2d-shapes-mcq-preview.png',
    ]

    return (
        <div
            key={item}
            className={`
                 flex items-center 
                justify-center transition-all
                duration-500
                border border-gray-400 border-solid
                `}
            style={{
                transform: `translateX(${transform}px)`,
                height,
                width,
            }}
        >
            <img
                src={image_assets_arr[item - 1]}
                alt=""
                className="object-contain transition-all
                    duration-500
                "
                style={{
                    height: height * 0.99,
                    width,
                }}
            />
        </div>
    )
}
