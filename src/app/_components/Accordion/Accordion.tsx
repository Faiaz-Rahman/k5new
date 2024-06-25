import { bottom_navbar_items, topic_name } from '@/app/_constants'
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
        <div className="w-full mb-10 lg:w-[200px] lg:mr-10">
            <div
                className="w-full py-2 
                bg-[--accordion-header] pl-2 
              text-white font-sm rounded-t-md

               lg:w-[200px]
            "
            >
                Math By Topic
            </div>
            <ul {...props} className="w-full lg:w-[200px]">
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
    const open: boolean = selected === value

    const divRef = useRef<HTMLDivElement>(null)
    const divRefInner = useRef<HTMLDivElement>(null)
    const [selectedInner, setSelectedInner] = useState<string>('')
    const [openInner, setOpenInner] = useState<boolean>(false)

    const accordion_dropdown_style: string =
        'h-10 pl-2 cursor-pointer flex items-center justify-between bg-[--accordion-grade-color] text-sm hover:bg-slate-50 w-full'

    useEffect(() => {
        console.log('likee =>', selectedInner)
        if (selectedInner !== '') {
            setOpenInner(true)
        } else {
            setOpenInner(false)
        }
    }, [selectedInner])

    // console.log(typeof divRef.current?.offsetHeight)

    return (
        <li {...props} className="">
            <header
                role="button"
                className="bg-[--accordion-topic] flex justify-between
                items-center py-2 pl-2 w-full text-white lg:w-[200px]"
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
                transition-all w-full duration-300
                lg:w-[200px]
                "
                style={{
                    height: open
                        ? selectedInner
                            ? 40 * (bottom_navbar_items.length - 1) +
                              40 * topic_name.length
                            : 40 * (bottom_navbar_items.length - 1)
                        : 0,
                }}
            >
                <div ref={divRef}>
                    {bottom_navbar_items.map((item, ind) => {
                        if (ind < bottom_navbar_items.length - 1) {
                            return (
                                <div key={ind}>
                                    <div
                                        key={ind}
                                        className={`
                                            ${accordion_dropdown_style}
                                        }`}
                                        onClick={() => {
                                            console.log(
                                                'data =>',
                                                selected,
                                                item
                                            )

                                            if (
                                                selectedInner === item
                                            ) {
                                                setSelectedInner('')
                                            } else {
                                                setSelectedInner(item)
                                            }
                                        }}
                                    >
                                        {item}
                                        <FontAwesomeIcon
                                            icon={faChevronUp}
                                            className={`text-[10px] text-black
                                        mr-3 transition-all duration-300 ${
                                            selectedInner === item
                                                ? 'rotate-180'
                                                : '0'
                                        }`}
                                        />
                                    </div>

                                    <div
                                        className="transition-all
                                        duration-300 overflow-y-hidden
                                    "
                                        style={{
                                            height:
                                                selectedInner === item
                                                    ? 40 *
                                                      topic_name.length
                                                    : 0,
                                        }}
                                    >
                                        <div ref={divRefInner}>
                                            {topic_name.map(
                                                (item, ind) => {
                                                    return (
                                                        <div
                                                            key={ind}
                                                            className={`h-10 pl-2 cursor-pointer flex items-center justify-between text-sm 
                                                                bg-white
                                                                 hover:bg-[--accordion-hover]
                                                            `}
                                                        >
                                                            {item}
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

                {children}
            </div>
        </li>
    )
}
