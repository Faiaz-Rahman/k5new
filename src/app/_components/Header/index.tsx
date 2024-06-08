import {
    faChevronDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'
import Link from 'next/link'

export default function Head() {
    const bottom_navbar_items: string[] = [
        'Kindergarden',
        'Grade-1',
        'Grade-2',
        'Grade-3',
        'Grade-4',
        'Grade-5',
        'Browse by topic',
    ]

    return (
        <header
            className="h-40 w-screen mb-10
            flex justify-center items-center flex-col
            gap-3 bg-red-200
            "
        >
            {/* Header Top UI*/}
            <div
                className="h-12 bg-red-100 w-full flex 
                items-center"
            >
                {/* Logo Container */}
                <div
                    className="h-full w-[150px] bg-green-200
                    flex items-center pl-[60px] 
                "
                >
                    <p
                        className="text-black font-bold
                        text-[17px]
                    "
                    >
                        Logo
                    </p>
                </div>

                {/* Search Bar */}
                <div
                    className="h-full w-[calc(100%_-_340px)] flex items-center
                    bg-red-300 justify-center
                "
                >
                    <div
                        className="h-[80%]
                    bg-red-300 w-[90%] flex justify-center 
                     rounded-full items-center  border-gray-300 
                     border
                "
                    >
                        <div
                            className="h-full w-8 flex justify-end
                            items-center bg-white rounded-s-full

                    "
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                style={{
                                    fontSize: 13,
                                    color: 'gray',
                                }}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex w-[100%] text-xs
                            h-[100%]    
                            pl-3 outline-none rounded-e-full
                            "
                        />
                    </div>
                </div>

                <div
                    className="h-full w-[230px]
                bg-green-500 flex items-center pr-[60px]
                "
                >
                    <div
                        className="h-[80%] w-full flex justify-center
                        bg-[--button-primary] rounded-full 
                        items-center cursor-pointer
                    "
                    >
                        <p className="text-xs font-semibold">
                            Become a member
                        </p>
                    </div>
                </div>
            </div>

            {/* Header Bottom UI */}
            <div
                className="h-10 bg-red-100 w-full pl-[52px]
                 flex
            "
            >
                <ul
                    className="h-full bg-violet-200 flex
                    items-center gap-3 w-full mr-7 border-r border-r-slate-400
                "
                >
                    {bottom_navbar_items.map((item, ind) => {
                        return (
                            <li
                                key={ind}
                                className="h-full flex items-center
                                hover:bg-red-500 hover:text-white
                                px-[8px]
                                "
                            >
                                <Link
                                    href="#"
                                    className="text-xs
                                    h-full w-full flex items-center
                                "
                                >
                                    {item}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div
                    className="h-full w-[240px] bg-green-400
                    flex items-center justify-center pr-[60px]
                "
                >
                    <div
                        className="h-5/6 w-full flex justify-center
                        bg-[--button-primary] rounded-full 
                        items-center cursor-pointer
                    "
                    >
                        <p className="text-xs font-semibold">
                            Workbook Store
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
