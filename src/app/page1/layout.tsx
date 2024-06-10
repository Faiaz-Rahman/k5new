'use client'
import Accordion, {
    AccordionItem,
} from '../_components/Accordion/Accordion'

export default function Page1Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex w-screen pl-[60px]">
                <Accordion value="en">
                    <AccordionItem
                        trigger="Topic 1"
                        value={'1'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 2"
                        value={'2'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 3"
                        value={'3'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 4"
                        value={'4'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 5"
                        value={'5'}
                    ></AccordionItem>

                    <AccordionItem
                        trigger="Topic 6"
                        value={'6'}
                    ></AccordionItem>
                </Accordion>
                <div className="w-full">{children}</div>
            </div>
        </>
    )
}
