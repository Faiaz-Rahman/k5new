import {
    faFacebook,
    faPinterest,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './index.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div
                className="h-48 w-screen grid 
                grid-cols-[28%_auto_auto] gap-2
                "
                // bg-green-100
            >
                <div
                    className="h-[100%] bg-white
                    flex justify-center pl-10 font-bold
                    text-sm flex-col gap-4 pb-3
                "
                >
                    Join Us
                    <div
                        className="h-10
                        flex items-center
                    "
                    >
                        <div
                            className="h-10 w-10
                        flex items-center justify-center 
                        rounded-full mr-3 border 
                        border-cyan-500 icons
                        "
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-[15px] text-cyan-500"
                            />
                        </div>

                        <div
                            className="h-10 w-10
                        flex items-center justify-center 
                        rounded-full mr-3 border-cyan-500
                        border icons
                        "
                        >
                            <FontAwesomeIcon
                                icon={faPinterest}
                                className="text-[15px] text-cyan-500"
                            />
                        </div>

                        <div
                            className="h-10 w-10
                            flex items-center justify-center rounded-full
                            border border-cyan-500 icons
                        "
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-[15px] text-cyan-500"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="h-[85%] flex 
                flex-col box-border
                justify-center"
                >
                    <p className="text-sm font-bold ml-10">
                        About Us
                    </p>
                    <div
                        className="h-[40%] w-[70%]
                        flex flex-col pt-3 ml-10 gap-1
                        "
                        // bg-red-800
                    >
                        <Link
                            href="#"
                            className="text-[14px] font-medium
                                hover:underline
                            "
                        >
                            About Us
                        </Link>
                        <Link
                            href="#"
                            className="text-[14px] font-medium
                            hover:underline
                            "
                        >
                            Membership
                        </Link>
                        <Link
                            href="#"
                            className="text-[14px] font-medium
                            hover:underline
                            "
                        >
                            Help & FAQs
                        </Link>
                    </div>
                </div>
                <div
                    className="h-[85%] flex flex-col box-border
                    justify-center
                "
                >
                    <p className="text-sm font-bold ml-10">Others</p>
                    <div
                        className="h-[40%] w-[70%]
                        flex flex-col pt-3 ml-10 gap-1
                        "
                        // bg-red-800
                    >
                        <Link
                            href="#"
                            className="text-[14px] font-medium
                                hover:underline
                            "
                        >
                            Terms and Conditions
                        </Link>
                        <Link
                            href="#"
                            className="text-[14px] font-medium
                            hover:underline
                            "
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-[14px] font-medium
                            hover:underline
                            "
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className="h-7 w-screen text-xs font-medium
            bg-red-100 flex items-center justify-center
            "
            >
                Copyright © 2023 K5 Learning
            </div>
        </div>
    )
}
