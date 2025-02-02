import React, { useState } from 'react'
import SliderItem from '../SliderItem'

interface SliderProps {
    style: number
    setStyle?: React.Dispatch<React.SetStateAction<number>>
    focusedInd: number
    setFocusedInd?: React.Dispatch<React.SetStateAction<number>>
    data: number[]
}

export default function Slider({
    style,
    focusedInd,
    data,
}: SliderProps) {
    return (
        <>
            {data.map((item, ind) => {
                if (ind === focusedInd) {
                    return (
                        <SliderItem
                            item={item}
                            key={ind}
                            transform={style}
                            height={300}
                            width={220}
                        />
                    )
                } else {
                    return (
                        <SliderItem
                            item={item}
                            key={ind}
                            transform={style}
                            height={200}
                            width={220}
                        />
                    )
                }
            })}
        </>
    )
}
