'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import SliderItem from '../_components/SliderItem'
import { Metadata } from 'next'

const metadata: Metadata = {
    title: 'Page1',
    description: 'This is the description of Page1',
}

export default function Page1() {
    // useEffect(() => {
    //     console.log('The selected item is: ', selected)
    // }, [selected])

    const data: number[] = [1, 2, 3, 4, 5, 6]
    const [focusedInd, setfocusedInd] = useState<number>(1)
    const [style, setStyle] = useState<number>(0)

    return (
        <>
            <div
                className="bg-red-200 py-2 pl-3 mb-10 
                w-[40%] text-[14px]
            "
            >
                List of Grade 1 Worksheets
            </div>

            <div
                className="bg-red-200 py-2 pl-3 
                text-[14px]
            w-[40%]"
            >
                List of Grade 2 Worksheets
            </div>

            <div
                className="flex items-center
                justify-between relative h-[400px] w-[660px]
                overflow-x-hidden
            "
            >
                <div
                    className="flex justify-center
                    h-full items-center
                    flex-row gap-1
                "
                >
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
                        } else if (ind === focusedInd - 1) {
                            return (
                                <SliderItem
                                    item={item}
                                    key={ind}
                                    transform={style}
                                    height={200}
                                    width={220}
                                />
                            )
                        } else if (ind === focusedInd + 1) {
                            return (
                                <SliderItem
                                    item={item}
                                    key={ind}
                                    transform={style}
                                    height={200}
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
                                    width={170}
                                />
                            )
                        }
                    })}
                </div>

                <div
                    role="button"
                    onClick={() => {
                        if (focusedInd >= 1) {
                            setfocusedInd((prev) => prev - 1)
                            setStyle((prev) => prev + 170)
                        }
                    }}
                    className="absolute h-10 w-10 bg-red-400
                        rounded-full left-0 flex justify-center items-center
                        shadow-md 
                     "
                >
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-white"
                    />
                </div>

                <div
                    role="button"
                    onClick={() => {
                        if (focusedInd < data.length - 1) {
                            setfocusedInd((prev) => prev + 1)
                            setStyle((prev) => prev - 170)
                        }
                    }}
                    className="absolute h-10 w-10 bg-red-400
                        rounded-full right-0 flex justify-center items-center
                        shadow-md
                    "
                >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-white"
                    />
                </div>
            </div>
        </>
    )
}
