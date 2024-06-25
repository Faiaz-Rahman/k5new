import {
    faBars,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'
import Link from 'next/link'

import { bottom_navbar_items } from '@/app/_constants'

export default function Head() {
    return (
        <header
            className="
            h-24 w-screen flex items-center justify-between fixed z-10 bg-white opacity-90

            sm:max-lg:h-24 sm:max-lg:w-screen sm:max-lg:flex sm:max-lg:items-center sm:max-lg:justify-between sm:max-lg:fixed sm:max-lg:z-10 sm:max-lg:bg-white sm:max-lg:opacity-90


            lg:h-40 lg:w-screen
            lg:flex lg:justify-center lg:items-center lg:flex-col
            lg:gap-3 lg:fixed lg:bg-white lg:opacity-90 lg:z-10
            "
        >
            <div
                className="h-full w-2/5 items-center flex
                        pl-10 lg:hidden
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

            <div className="pr-[20px] flex items-center lg:hidden">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{
                        fontSize: 15,
                        color: 'gray',
                    }}
                />

                <FontAwesomeIcon
                    icon={faBars}
                    style={{
                        fontSize: 15,
                        color: 'gray',
                        marginLeft: 16,
                    }}
                />
            </div>

            {/* Header Top UI*/}
            <div
                className="hidden lg:h-12 lg:w-full lg:flex lg:items-center lg:pl-24"
                // bg-red-100
            >
                {/* Logo Container */}
                <div
                    className="h-full w-[150px] flex items-center
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
                    className="h-full w-[calc(100%_-_440px)] flex items-center
                    justify-center
                    "
                    // bg-red-300
                >
                    <div
                        className="h-[80%]
                     w-[90%] flex justify-center
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
                            h-[100%] pl-3 outline-none rounded-e-full
                            "
                        />
                    </div>
                </div>

                <div
                    className="h-full w-[290px]
                flex items-center pr-24
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
                className="hidden lg:h-10 lg:w-full lg:flex lg:pl-20
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
                                px-[15px] transition-all duration-300
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
                    className="h-full w-[300px]
                    flex items-center justify-center pr-24
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
