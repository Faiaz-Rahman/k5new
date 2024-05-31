'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AccordionContext } from '../_components/Accordion/Accordion'

import { AccordionContextType } from '../_components/Accordion/Accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function page1() {
    // useEffect(() => {
    //     console.log('The selected item is: ', selected)
    // }, [selected])

    const data = [1, 2, 3, 4, 5]
    const [focusedInd, setfocusedInd] = useState<number>(2)
    const [style, setStyle] = useState('')

    return (
        <>
            <div
                className="bg-red-200 py-2 pl-2 mb-10 w-[40%]
            "
            >
                List of Grade 1 Worksheets
            </div>

            <div className="bg-red-200 py-2 px-2 w-[40%]">
                List of Grade 2 Worksheets
            </div>

            <div
                className="flex bg-orange-100 items-center pt-3
                justify-between relative h-[400px] w-[calc(100% - 200px)] gap-[10px] overflow-hidden
            "
            >
                {data.map((item, ind) => {
                    if (ind === focusedInd) {
                        return (
                            <div
                                key={item}
                                className={`h-[300px] w-[300px] bg-blue-200 flex items-center justify-center transition-all duration-500`}
                            >
                                {item}
                            </div>
                        )
                    } else if (ind === focusedInd - 1) {
                        return (
                            <div
                                key={item}
                                className={`h-[200px] w-[200px] bg-blue-200 flex items-center justify-center transition-all duration-500`}
                            >
                                {item}
                            </div>
                        )
                    } else if (ind === focusedInd + 1) {
                        return (
                            <div
                                key={item}
                                className={`h-[200px] w-[200px] bg-blue-200 flex items-center justify-center transition-all duration-500`}
                            >
                                {item}
                            </div>
                        )
                    }
                })}

                <div
                    role="button"
                    onClick={() => {
                        if (focusedInd > 1) {
                            setfocusedInd((prev) => prev - 1)
                            setStyle('transform -translate-x-[200px]')
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
                        if (focusedInd < 3) {
                            setfocusedInd((prev) => prev + 1)
                            setStyle('transform translate-x-[200px]')
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
