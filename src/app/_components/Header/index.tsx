import {
    faChevronDown,
    faChevronUp,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'

export default function Head() {
    return (
        <header
            className="h-32 w-screen 
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
                        className="h-[35px] w-5/6 bg-green-400
                        rounded-sm flex justify-center items-center
                        cursor-pointer relative group
                    "
                    >
                        <p className="text-black text-xs">
                            Become a member
                        </p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="rotate-180 transition-all duration-300 group-hover:rotate-0"
                            style={{
                                fontSize: 8,
                                marginLeft: 3,
                            }}
                        />
                        <div
                            className="absolute top-full bg-white h-16 
                            w-full hidden transition-all group-hover:flex
                            shadow-md
                        "
                        >
                            <ul className="h-full w-full">
                                <li
                                    className="w-full pl-2 text-[9px] 
                                text-slate-400 h-1/2 flex items-center
                                hover:bg-slate-200 hover:text-black
                                "
                                >
                                    Sign Up
                                </li>
                                <li
                                    className="w-full pl-2 text-[9px]
                                text-slate-400 h-1/2 flex items-center 
                                hover:bg-slate-200 hover:text-black
                            "
                                >
                                    Already a member? Sign In
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="h-[35px] w-5/6 bg-green-400
                        rounded-sm flex justify-center items-center
                        cursor-pointer
                    "
                    >
                        <p className="text-black text-xs">
                            Workbook Store
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
