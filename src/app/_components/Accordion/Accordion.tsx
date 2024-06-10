import { bottom_navbar_items } from '@/app/_constants'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import { createContext } from 'react'

interface Accordion {
    children: ReactNode
    onChange?: () => void
    value: string
}

interface AccordionItem {
    children?: ReactNode
    value: string
    trigger: string
}

export type AccordionContextType = [
    selected: string | null,
    setSelected: React.Dispatch<React.SetStateAction<string | null>>
]

export const AccordionContext = createContext<AccordionContextType>([
    '',
    () => '',
])

export default function Accordion({
    children,
    onChange,
    value,
    ...props
}: Accordion) {
    const [selected, setSelected] = useState<string | null>(value)

    return (
        <div>
            <div
                className="w-[200px] py-2 
            bg-[--accordion-header] pl-2
            text-white font-sm rounded-t-md
            "
            >
                Math By Topic
            </div>
            <ul {...props} className="mr-5">
                <AccordionContext.Provider
                    value={[selected, setSelected]}
                >
                    {children}
                </AccordionContext.Provider>
            </ul>
        </div>
    )
}

export function AccordionItem({
    children,
    value,
    trigger,
    ...props
}: AccordionItem) {
    const [selected, setSelected] = useContext(AccordionContext)
    const open = selected === value

    const divRef = useRef<HTMLDivElement>(null)

    const accordion_dropdown_style: string =
        'py-2 pl-2 cursor-pointer flex items-center justify-between bg-[--accordion-grade-color] text-sm hover:bg-slate-100'

    // useEffect(() => {
    //     console.log('value of selected from Accordion =>', selected)
    // }, [selected])

    return (
        <li {...props}>
            <header
                role="button"
                className="bg-[--accordion-topic] flex justify-between 
                items-center py-2 pl-2 w-[200px] text-white"
                onClick={() => {
                    setSelected(open ? null : value)
                }}
            >
                {trigger}
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`text-[10px] text-white
                        mr-3 transition-all ${
                            open ? 'rotate-180' : '0'
                        } duration-300`}
                />
            </header>
            <div
                className="overflow-y-hidden 
                transition-all w-[200px] duration-300
                "
                style={{
                    height: open ? divRef.current?.offsetHeight : 0,
                }}
            >
                <div ref={divRef}>
                    {bottom_navbar_items.map((item, ind) => {
                        return (
                            <div
                                key={ind}
                                className={accordion_dropdown_style}
                            >
                                {item}

                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className={`text-[10px] text-black
                        mr-3 transition-all`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </li>
    )
}
