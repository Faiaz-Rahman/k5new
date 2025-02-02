'use client'

import Accordion, {
    AccordionItem,
} from '@/app/_components/Accordion/Accordion'

export default function PrintableWorksheetLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className="flex flex-col-reverse w-screen pl-[20px] 
                        pt-24 pr-[20px]
                        lg:pl-24 lg:flex-row lg:pt-40 lg:pr-24
                    "
            >
                <Accordion value="en">
                    <AccordionItem
                        trigger="Kindergarden"
                        value={'Kindergarden'}
                    />

                    <AccordionItem
                        trigger="Grade 1"
                        value={'Grade 1'}
                    />

                    <AccordionItem
                        trigger="Grade 2"
                        value={'Grade 2'}
                    />

                    <AccordionItem
                        trigger="Grade 3"
                        value={'Grade 3'}
                    />

                    <AccordionItem
                        trigger="Grade 4"
                        value={'Grade 4'}
                    />

                    <AccordionItem
                        trigger="Grade 5"
                        value={'Grade 5'}
                    />
                </Accordion>

                <div className="flex flex-col w-full">{children}</div>
            </div>
        </>
    )
}
