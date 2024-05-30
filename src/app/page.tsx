'use client'

import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Accordion from './_components/Accordion/Accordion'

import { AccordionItem } from './_components/Accordion/Accordion'

export default function Home() {
    const [open, setOpen] = useState(false)

    // useEffect(() => {
    //     console.log('the accordion open status: ', open)
    // }, [open])

    return (
        <main className="flex min-h-screen w-screen flex-col">
            {/* <button
                data-collapse-target="collapse-1"
                onClick={() => {
                    setOpen((prev) => !prev)
                }}
                className="ml-3 h-10 w-36 flex bg-blue-400 
                transition-all relative group items-center rounded-sm
                justify-between 
        "
            >
                <p className="text-white text-sm ml-3">Math</p>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={
                        'text-[10px] text-white mr-3 transition-all'
                    }
                />

                <div
                    data-collapse="collapse-1"
                    className="h-0 w-36 bg-gray-200
                    hidden absolute top-full group-hover:h-56 transition-all
                    duration-500 ease-in
                    group-hover:flex flex-col
                "
                >
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                    <p>This is a paragraph</p>
                </div>
            </button> */}

            <Accordion value="Topic 1">
                <AccordionItem trigger="Topic 1" value={'1'}>
                    Kindergarden
                </AccordionItem>

                <AccordionItem
                    trigger="Topic 2"
                    value={'2'}
                ></AccordionItem>

                <AccordionItem
                    trigger="Topic 3"
                    value={'3'}
                ></AccordionItem>
            </Accordion>
        </main>
    )
}
