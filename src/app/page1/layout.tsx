'use client'
import Accordion, {
    AccordionItem,
} from '../_components/Accordion/Accordion'
import { topic_name } from '../_constants'

export default function Page1Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const accordion_dropdown_style: string =
        'py-2 pl-2 cursor-pointer flex items-center justify-between bg-[--accordion-grade-color] text-sm hover:bg-slate-100'

    return (
        <>
            <div className="flex w-screen pl-[60px]">
                <Accordion value="en">
                    <AccordionItem
                        trigger="Topic 1"
                        value={'Topic 1'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 2"
                        value={'Topic 2'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 3"
                        value={'Topic 3'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 4"
                        value={'Topic 4'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 5"
                        value={'Topic 5'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 6"
                        value={'Topic 6'}
                    ></AccordionItem>
                </Accordion>
                <div className="w-full">{children}</div>
            </div>
        </>
    )
}
