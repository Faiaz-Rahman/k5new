import React from 'react'
import { bottom_navbar_items } from '../_constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PrintableMathCards from '../_components/PrintableMathCards'

export default function PrintableWorksheets() {
    const worksheets: string[] = [
        'Kindergarten Learning Numbers Worksheets',

        'Kindergarten Odd/Even Numbers Worksheets',
        'Kindergarten Ordinal Numbers Worksheets',
        'Grade 1 Numbers Worksheets',
        'Grade 1 Number Patterns Worksheets',
    ]

    return (
        <div className="mt-5">
            <p
                className="text-black 
                text-[48px] font-semibold 
            "
            >
                Printable Math Worksheets
            </p>

            <p
                className="text-black text-[32px] 
            font-semibold mt-4"
            >
                Math Worksheets by Grade
            </p>

            <div className="flex flex-col gap-3 mt-16 mb-10">
                {bottom_navbar_items.map((item, ind) => {
                    return (
                        <div
                            key={ind}
                            className="flex h-16 w-full
                            border-b border-b-slate-300 pl-5
                            "
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
                                        mr-7
                                        `}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-2 w-full gap-3 mb-10">
                <PrintableMathCards
                    title="Learning Number"
                    worksheets={worksheets}
                />
                <PrintableMathCards
                    title="Learning Number"
                    worksheets={worksheets}
                />
                <PrintableMathCards
                    title="Learning Number"
                    worksheets={worksheets}
                />
                <PrintableMathCards
                    title="Learning Number"
                    worksheets={worksheets}
                />
                <PrintableMathCards
                    title="Learning Number"
                    worksheets={worksheets}
                />
                <PrintableMathCards
                    title="Learning Number"
                    worksheets={worksheets}
                />
            </div>
        </div>
    )
}
