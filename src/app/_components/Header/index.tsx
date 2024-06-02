import {
    faChevronDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'

export default function Head() {
    return (
        <header
            className="h-32 w-screen mb-10
            "
            // bg-red-500
        >
            <div
                className="h-5/6 w-screen 
                flex items-end justify-between
                "
                // bg-blue-200
            >
                {/* Logo Container */}
                <div
                    className="h-5/6 w-[130px]
                    bg-black flex
                    justify-center items-center
            "
                >
                    <p className="text-white text-xl">Logo</p>
                </div>

                {/* Input Container */}
                <div
                    className="h-5/6 
                    flex items-center justify-center"
                    // bg-violet-400
                    style={{
                        width: 'calc(65% - 130px)',
                    }}
                >
                    <div
                        className="h-4/6 w-[95%] bg-white
                        rounded-full flex pr-[2px]
                        items-center overflow-hidden
                        border-gray-400 border-[1px]
                        "
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            className="
                            outline-none h-full pl-4
                            text-sm text-black
                            "
                            style={{
                                width: 'calc(100% - 43px)',
                            }}
                        />

                        <div
                            className="h-[52px] bg-green-400 
                            w-[52px] flex justify-center items-center
                            rounded-full cursor-pointer
                            "
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="
                                text-white text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="h-5/6 w-[25%] 
                    flex-col flex justify-between items-center
                    "
                    // bg-cyan-700
                >
                    <div
                        className="h-[35px] w-5/6 bg-red-600
                        rounded-sm flex justify-center items-center
                        cursor-pointer relative group
                    "
                    >
                        <p className="text-white text-xs font-semibold">
                            Become a member
                        </p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="rotate-180 transition-all duration-300 
                            group-hover:rotate-0 text-white"
                            style={{
                                fontSize: 12,
                                marginLeft: 5,
                            }}
                        />
                        <div
                            className="h-0 w-full absolute top-full bg-white 
                            hidden transition-all group-hover:flex
                            shadow-md group-hover:h-16 duration-500
                        "
                        >
                            <ul className="h-full w-full">
                                <li
                                    className="w-full h-1/2 pl-2 text-[10px] 
                                text-slate-400 flex items-center
                                hover:bg-slate-200 hover:text-black hover:font-semibold
                                "
                                >
                                    Sign Up
                                </li>
                                <li
                                    className="h-1/2 w-full pl-2 text-[10px]
                                text-slate-400 flex items-center 
                                hover:bg-slate-200 hover:text-black hover:font-semibold
                                "
                                >
                                    Already a member? Sign In
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="h-[35px] w-5/6 bg-red-600
                        rounded-sm flex justify-center items-center
                        cursor-pointer
                    "
                    >
                        <p className="text-white text-xs font-semibold">
                            Workbook Store
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-screen h-10 bg-red-100 flex items-center">
                <ul className="flex pl-3">
                    <li
                        className="px-3 h-10 hover:bg-red-600 flex
                        items-center justify-center text-xs hover:text-white 
                        rounded-sm font-semibold
                    "
                    >
                        Kindergarden
                    </li>
                    <li
                        className="px-3 h-10 hover:bg-red-600 flex
                        items-center justify-center text-xs hover:text-white 
                        rounded-sm font-semibold
                    "
                    >
                        Grade-1
                    </li>
                    <li
                        className="px-3 h-10 hover:bg-red-600 flex
                        items-center justify-center text-xs hover:text-white 
                        rounded-sm font-semibold
                    "
                    >
                        Grade-2
                    </li>
                    <li
                        className="px-3 h-10 hover:bg-red-600 flex
                        items-center justify-center text-xs hover:text-white 
                        rounded-sm font-semibold
                    "
                    >
                        Grade-3
                    </li>
                    <li
                        className="px-3 h-10 hover:bg-red-600 flex
                        items-center justify-center text-xs hover:text-white 
                        rounded-sm font-semibold
                    "
                    >
                        Grade-4
                    </li>
                    <li
                        className="px-3 h-10 hover:bg-red-600 flex
                        items-center justify-center text-xs hover:text-white 
                        rounded-sm font-semibold
                    "
                    >
                        Grade-5
                    </li>
                    <li
                        className="px-3 h-10 hover:bg-red-600 flex
                        items-center justify-center text-xs hover:text-white 
                        rounded-sm font-semibold
                    "
                    >
                        Browse By Topic
                    </li>
                </ul>
            </div>
        </header>
    )
}
