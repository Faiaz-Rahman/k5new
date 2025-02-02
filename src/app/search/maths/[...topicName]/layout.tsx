'use client'

import Accordion, {
    AccordionItem,
} from '@/app/_components/Accordion/Accordion'
import { accordion_item_list } from '@/app/_constants'

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
                    {accordion_item_list.map(
                        (_accordion_topic, _acc_ind) => {
                            return (
                                <AccordionItem
                                    key={`accordion_${_accordion_topic}`}
                                    trigger={_accordion_topic}
                                    value={_accordion_topic}
                                />
                            )
                        }
                    )}
                </Accordion>

                <div className="flex flex-col w-full">{children}</div>
            </div>
        </>
    )
}
