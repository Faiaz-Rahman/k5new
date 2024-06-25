'use client'

import React, { useEffect, useState } from 'react'
import { bottom_navbar_items, topic_list } from '../_constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PrintableMathCards from '../_components/PrintableMathCards'

export default function PrintableWorksheetsPageClient() {
    const worksheets: string[] = [
        'Kindergarten Learning Numbers Worksheets',
        'Kindergarten Odd/Even Numbers Worksheets',
        'Kindergarten Ordinal Numbers Worksheets',
        'Grade 1 Numbers Worksheets',
        'Grade 1 Number Patterns Worksheets',
    ]

    const tmp_arr: number[] = [1, 2, 3, 4, 5, 6]
    const [selectedAccordion, setSelectedAccordion] =
        useState<string>('')

    // useEffect(() => {
    //     console.log('The selected Accordion is =>', selectedAccordion)
    // }, [selectedAccordion])

    return (
        <div className="">
            <p
                className="text-black 
                text-[24px] font-semibold 
                lg:text-[48px]
            "
            >
                Printable Math Worksheets
            </p>

            <p
                className="text-black text-[16px] 
                font-semibold mt-4 
                lg:text-[32px]
            "
            >
                Math Worksheets by Grade
            </p>

            <div className="flex flex-col gap-3 mt-16 mb-10">
                {bottom_navbar_items.map((item, ind) => {
                    return (
                        <>
                            <div
                                key={`accordion${ind}`}
                                className="flex h-16 w-full flex-col
                                border-b border-b-slate-300 pl-[20px] hover:cursor-pointer
                                lg:pl-4
                                "
                                onClick={() => {
                                    if (selectedAccordion === item) {
                                        setSelectedAccordion('')
                                    } else {
                                        setSelectedAccordion(item)
                                    }
                                }}
                            >
                                <div
                                    className="flex w-full h-7
                                    items-center justify-between
                            "
                                >
                                    {item}
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`text-[10px] text-black
                                        mr-7 duration-300 ${
                                            selectedAccordion === item
                                                ? 'rotate-180'
                                                : '0'
                                        }
                                        `}
                                    />
                                </div>
                            </div>

                            <div
                                key={`bottom_navbar_items${ind}`}
                                className="overflow-y-hidden w-full 
                                transition-all duration-300
                                "
                                style={{
                                    height:
                                        selectedAccordion === item
                                            ? topic_list.length * 40 +
                                              20 +
                                              12
                                            : 0,
                                }}
                            >
                                {topic_list.map((itemInner, ind) => {
                                    return (
                                        <div
                                            key={`topic_list${ind}`}
                                            className={`flex w-full bg-[--button-primary] 
                                                h-10 pl-5 rounded-md cursor-pointer
                                                items-center ${
                                                    ind ===
                                                    topic_list.length -
                                                        1
                                                        ? 'mb-0'
                                                        : 'mb-1'
                                                }`}
                                        >
                                            {itemInner}
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                })}
            </div>

            <div
                className="grid grid-cols-1 w-full gap-3 mb-10
                md:grid-cols-2
            "
            >
                {tmp_arr.map((item, ind) => {
                    return (
                        <PrintableMathCards
                            key={`printable_worksheets${ind}`}
                            title="Learning Number"
                            worksheets={worksheets}
                        />
                    )
                })}
            </div>
        </div>
    )
}
