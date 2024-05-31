import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {
    LegacyRef,
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
        <ul {...props} className="mx-5">
            <AccordionContext.Provider
                value={[selected, setSelected]}
            >
                {children}
            </AccordionContext.Provider>
        </ul>
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

    // useEffect(() => {
    //     console.log('value of selected from Accordion =>', selected)
    // }, [selected])

    return (
        <li {...props}>
            <header
                role="button"
                className="bg-red-200 flex justify-between 
                items-center py-2 pl-2 w-[200px]"
                onClick={() => {
                    setSelected(open ? null : value)
                }}
            >
                {trigger}
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`text-[10px] text-black
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
                    <div
                        className="py-2 pl-2 text-sm 
                        hover:bg-slate-100
                        cursor-pointer
                    "
                    >
                        Kindergarden
                    </div>
                    <div
                        className="py-2 pl-2 
                    cursor-pointer
                    text-sm hover:bg-slate-100"
                    >
                        Grade-1
                    </div>
                    <div
                        className="py-2 pl-2 
                    cursor-pointer
                    text-sm hover:bg-slate-100"
                    >
                        Grade-2
                    </div>
                    <div
                        className="py-2 pl-2 
                    cursor-pointer
                    text-sm hover:bg-slate-100"
                    >
                        Grade-3
                    </div>
                    <div
                        className="py-2  pl-2 
                    cursor-pointer
                    text-sm hover:bg-slate-100"
                    >
                        Grade-4
                    </div>
                    <div
                        className="py-2 pl-2 
                        cursor-pointer
                    text-sm hover:bg-slate-100"
                    >
                        Grade-5
                    </div>
                </div>
            </div>
        </li>
    )
}
