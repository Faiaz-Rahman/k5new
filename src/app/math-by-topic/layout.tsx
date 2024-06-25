'use client'
import Accordion, {
    AccordionItem,
} from '../_components/Accordion/Accordion'

export default function BrowseByTopicsLayout({
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

                <div className="flex flex-col w-full">{children}</div>
            </div>
        </>
    )
}
