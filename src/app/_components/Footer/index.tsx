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
            {/* <div
                className="h-48 w-screen grid 
                grid-cols-[45%_auto_auto] gap-2 bg-[--card]
                "
                // bg-green-100
            > */}
            <div
                className="h-56 w-screen grid 
                grid-cols-1 gap-10 bg-[--card] 
                lg:grid-cols-[40%_auto]
            "
            >
                <div
                    className="h-[100%] flex justify-center pl-[20px] 
                    font-bold text-sm flex-col mt-4
                    lg:pl-24  
                "
                >
                    Join Us
                    <div
                        className="h-5
                        flex items-center
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
                <div className="flex items-center w-full">
                    <div
                        className="h-[90%] flex flex-col box-border
                        justify-center pl-[20px] w-full
                        lg:pt-9
                    "
                    >
                        <p className="text-sm font-bold">About Us</p>
                        <div
                            className="h-[45%] w-[80%]
                            flex flex-col gap-1 mt-3
                        "
                            // bg-red-800
                        >
                            <Link
                                href="#"
                                className="text-[12px] font-medium
                                hover:underline
                                lg:text-[15px]
                            "
                            >
                                About Us
                            </Link>
                            <Link
                                href="#"
                                className="text-[12px] font-medium
                                hover:underline
                                lg:text-[15px]
                            "
                            >
                                Membership
                            </Link>
                            <Link
                                href="#"
                                className="text-[12px] font-medium
                                hover:underline
                                lg:text-[15px]
                            "
                            >
                                Help & FAQs
                            </Link>
                        </div>
                    </div>
                    <div
                        className="h-[90%] flex flex-col box-border
                            justify-center pl-[20px] w-full
                            lg:pt-9
                        "
                    >
                        <p className="text-sm font-bold ">Others</p>
                        <div
                            className="h-[45%] w-[100%]
                           flex flex-col gap-1 mt-3
                        "
                            // bg-red-800
                        >
                            <Link
                                href="#"
                                className="text-[12px] font-medium
                                hover:underline
                                lg:text-[15px]
                            "
                            >
                                Terms and Conditions
                            </Link>
                            <Link
                                href="#"
                                className="text-[12px] font-medium
                                hover:underline
                                lg:text-[15px]
                            "
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-[12px] font-medium
                                hover:underline
                                lg:text-[15px]
                            "
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="w-screen text-xs font-medium
            bg-[--button-primary] flex items-center justify-center pt-10 pb-3
            "
            >
                Copyright © 2024 WittyWorkbooks
            </div>
        </div>
    )
}
