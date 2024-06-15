import {
    faChevronDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'
import Link from 'next/link'

import { bottom_navbar_items } from '@/app/_constants'

export default function Head() {
    return (
        <header
            className="h-40 w-screen
            flex justify-center items-center flex-col
            gap-3 fixed bg-white opacity-90
            "
        >
            {/* Header Top UI*/}
            <div
                className="h-12 
                w-full flex 
                items-center"
                // bg-red-100
            >
                {/* Logo Container */}
                <div
                    className="h-full w-[150px] 
                    flex items-center pl-[60px] 
                    "
                    // bg-green-200
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
                    justify-center
                    "
                    // bg-red-300
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
                flex items-center pr-[60px]
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
                className="h-10 w-full pl-[52px]
                 flex
            "
            >
                <ul
                    className="h-full flex
                    items-center gap-3 w-full mr-7 border-r border-r-slate-400
                "
                >
                    {bottom_navbar_items.map((item, ind) => {
                        return (
                            <li
                                key={ind}
                                className="h-full flex items-center
                                hover:bg-[--button-primary]
                                px-[8px] transition-all duration-300
                                rounded-sm
                                "
                            >
                                <Link
                                    href="#"
                                    className="text-xs font-medium
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
                    className="h-full w-[240px]
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
