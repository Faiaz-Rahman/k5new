'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
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
    const [focusedInd, setfocusedInd] = useState<number>(1)
    const [style, setStyle] = useState<number>(0)

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
                className="flex items-center
                justify-between relative h-[400px] w-[660px]
                overflow-x-hidden
            "
            >
                <div
                    className="flex justify-center
                    h-full items-center gap-1 
                    flex-row
                "
                >
                    {data.map((item, ind) => {
                        if (ind === focusedInd) {
                            return (
                                <div
                                    key={item}
                                    className={`h-[300px] w-[220px] 
                                bg-blue-200 flex items-center 
                                justify-center transition-all
                                duration-500`}
                                    style={{
                                        transform: `translateX(${style}px)`,
                                    }}
                                >
                                    {item}
                                </div>
                            )
                        } else if (ind === focusedInd - 1) {
                            return (
                                <div
                                    key={item}
                                    className={`h-[200px] w-[220px]
                                bg-blue-200 flex transform 
                                items-center justify-center 
                                transition-all duration-500
                            `}
                                    style={{
                                        transform: `translateX(${style}px)`,
                                    }}
                                >
                                    {item}
                                </div>
                            )
                        } else if (ind === focusedInd + 1) {
                            return (
                                <div
                                    key={item}
                                    className={`h-[200px] w-[220px] 
                                bg-blue-200 flex items-center
                                justify-center transition-all
                                duration-500 
                                
                                `}
                                    style={{
                                        transform: `translateX(${style}px)`,
                                    }}
                                >
                                    {item}
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={item}
                                    className={`h-[200px] w-[180px]
                                bg-blue-200 flex items-center 
                                justify-center transition-all
                                duration-500

                                `}
                                    style={{
                                        transform: `translateX(${style}px)`,
                                    }}
                                >
                                    {item}
                                </div>
                            )
                        }
                    })}
                </div>

                <div
                    role="button"
                    onClick={() => {
                        if (focusedInd > 1) {
                            setfocusedInd((prev) => prev - 1)
                            setStyle((prev) => prev + 180)
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
                            setStyle((prev) => prev - 180)
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
