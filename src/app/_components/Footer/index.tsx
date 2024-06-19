import {
    faFacebook,
    faLinkedin,
    faPinterest,
    faSquareInstagram,
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
                grid-cols-[45%_auto_auto] gap-2 bg-[--card]
                "
                // bg-green-100
            >
                <div
                    className="h-[100%]
                    flex justify-center pl-24 font-bold
                    text-sm flex-col gap-[1rem] pb-3
                "
                >
                    Join Us
                    <div
                        className="h-5
                        flex items-cente
                    "
                    >
                        <div className="icons mr-3">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-[20px] text-black"
                            />
                        </div>
                        <div className="mr-3 icons">
                            <FontAwesomeIcon
                                icon={faSquareInstagram}
                                className="text-[20px] text-black"
                            />
                        </div>

                        <div className=" mr-3 icons">
                            <FontAwesomeIcon
                                icon={faPinterest}
                                className="text-[20px] text-black"
                            />
                        </div>

                        <div className=" mr-3 icons">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-[20px] text-black"
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
            bg-[--button-primary] flex items-center justify-center
            "
            >
                Copyright © 2024 WittyWorkbooks
            </div>
        </div>
    )
}
