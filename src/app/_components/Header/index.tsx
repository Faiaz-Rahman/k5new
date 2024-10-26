'use client'

import {
    faBars,
    faChevronLeft,
    faChevronRight,
    faCircleXmark,
    faMagnifyingGlass,
    faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AnimatePresence, motion } from 'framer-motion'

import './index.css'
import Link from 'next/link'

import { bottom_navbar_items, nav_menu_list } from '@/app/_constants'
import { useEffect, useState } from 'react'

export default function Head() {
    const [showLoginDropdown, setShowLoginDropdown] =
        useState<boolean>(false)

    const [showMinimizedLinkDropdown, setShowMinimizedLinkDropdown] =
        useState<string>('')

    const [menuPressed, setMenuPressed] = useState<boolean>(false)

    const toggleMenuPress = (): void => {
        setMenuPressed((prev) => !prev)
    }

    // useEffect(() => {
    //     console.log(menuPressed)
    // }, [menuPressed])

    return (
        <header
            className="
            h-24 w-screen flex items-center justify-between fixed z-10 bg-white opacity-100
        
            sm:max-lg:h-24 sm:max-lg:w-screen sm:max-lg:flex sm:max-lg:items-center sm:max-lg:justify-between sm:max-lg:fixed sm:max-lg:z-10 sm:max-lg:bg-white sm:max-lg:opacity-100


            lg:h-40 lg:w-screen
            lg:flex lg:justify-center lg:items-center lg:flex-col
            lg:gap-3 lg:fixed lg:bg-white lg:opacity-100 lg:z-10
            "
        >
            {/* mobile responsive navbar > logo container */}
            <div
                className="h-full w-2/5 items-center flex
                    pl-[20px] lg:hidden
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

            {/* mobile responive navbar > icons container */}
            <div
                className="pr-[20px] flex items-center lg:hidden
                w-20
            "
            >
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{
                        fontSize: 15,
                        color: 'gray',
                    }}
                />

                <div
                    onClick={toggleMenuPress}
                    className="transition-all duration-150"
                >
                    {menuPressed ? (
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="transition-all duration-300"
                            style={{
                                fontSize: 18,
                                color: '#000',
                                marginLeft: 16,
                                transform: menuPressed
                                    ? 'rotate(90deg)'
                                    : 'rotate(0deg)',
                            }}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faBars}
                            className="transition-all duration-300"
                            style={{
                                fontSize: 14,
                                color: '#000',
                                marginLeft: 16,
                                transform: menuPressed
                                    ? 'rotate(0deg)'
                                    : 'rotate(180deg)',
                            }}
                        />
                    )}
                </div>
            </div>

            {/* to animate it while it being removed from DOM */}

            {/* side menu bar */}
            <AnimatePresence>
                {menuPressed && (
                    <motion.div
                        className="h-[100vh] w-full bg-white absolute
                        top-full lg:hidden 
                        transition-all duration-75
                        flex flex-col gap-2
                    "
                        initial={{
                            x: '100%',
                        }}
                        animate={{
                            x: '0%',
                        }}
                        exit={{ x: '100%' }}
                        transition={{
                            bounce: 0.7,
                            type: 'spring',
                            stiffness: 100,
                        }}
                    >
                        {bottom_navbar_items.map(
                            (navbar_item, nav_index) => {
                                return (
                                    <div
                                        key={`side_menu_${nav_index}`}
                                        className="h-[55px] 
                                    w-2/3 bg-[--button-primary] self-center
                                    rounded-lg cursor-pointer flex items-center
                                    justify-center
                                "
                                    >
                                        <p
                                            className="text-black 
                                            text-md font-medium
                                        "
                                        >
                                            {navbar_item}
                                        </p>
                                    </div>
                                )
                            }
                        )}
                        {/* auth (login/register) Wrapper */}
                        <div
                            className="h-[55px] w-2/3 flex 
                            items-center bg-red-50 rounded-md
                            justify-between self-center px-7
                        "
                        >
                            <div
                                className="
                                flex items-center h-full pr-3"
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="text-xs mr-1"
                                />
                                <Link
                                    className="hover:underline 
                                        h-full flex items-center

                                        sm:max-lg:text-[.9rem] sm:max-lg:text-black
                                        sm:max-lg:font-semibold
                                    "
                                    href="/login"
                                    onClick={() => {
                                        setMenuPressed(false)
                                    }}
                                >
                                    <p
                                        className="text-[.8rem] text-black

                                        sm:max-lg:text-[.9rem] sm:max-lg:text-black
                                        sm:max-lg:font-semibold
                                    "
                                    >
                                        Login
                                    </p>
                                </Link>
                            </div>

                            <div
                                className="
                                flex items-center h-full pl-3
                            "
                            >
                                <Link
                                    className="
                                        text-right h-full flex items-center
                                    
                                        sm:max-lg:text-[.9rem] sm:max-lg:text-black
                                        sm:max-lg:font-semibold
                                        "
                                    onClick={() => {
                                        setMenuPressed(false)
                                    }}
                                    href="/register"
                                >
                                    <p
                                        className="text-[.8rem] text-black hover:underline

                                        sm:max-lg:text-[.9rem] sm:max-lg:text-black
                                        sm:max-lg:font-semibold
                                    "
                                    >
                                        Register
                                    </p>
                                </Link>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className="text-xs ml-1"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                    className="h-full w-[calc(100%_-_300px)] flex items-center
                    justify-center
                    "
                    // bg-red-300
                >
                    <div
                        className="h-[80%]
                     w-[100%] flex justify-center
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
                    className="h-full w-[300px]
                    flex items-center pr-24 pl-7
                "
                >
                    <div
                        className="h-[80%] w-full flex justify-center
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

            {/* Header Bottom UI > nav links */}
            <div
                className="hidden lg:h-10 lg:w-full lg:flex lg:pl-20
            "
            >
                {/* nav links */}
                <ul
                    className="h-full flex
s                    items-center gap-3 w-full mr-7 border-r 
                    border-r-slate-400 justify-between pr-5
                "
                >
                    {bottom_navbar_items.map((item, ind) => {
                        return (
                            <li
                                key={`${ind}`}
                                className="h-full flex items-center
                                    hover:bg-[--button-primary]
                                    px-[15px] transition-all duration-300
                                    rounded-full relative
                                "
                                onMouseEnter={() => {
                                    setShowMinimizedLinkDropdown(item)
                                }}
                                onMouseLeave={() => {
                                    setShowMinimizedLinkDropdown('')
                                }}
                            >
                                <Link
                                    href="#"
                                    className="text-xs font-medium
                                    h-full w-full flex items-center
                                "
                                >
                                    {item}
                                </Link>

                                {showMinimizedLinkDropdown ===
                                    item && (
                                    <motion.div
                                        initial={{
                                            scale: 0,
                                            y: 15,
                                        }}
                                        animate={{
                                            scale: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            scale: 0,
                                            y: 15,
                                        }}
                                        className="bg-transparent flex pt-4 
                                        absolute top-full"
                                    >
                                        <div
                                            className="w-[170px] bg-white shadow-md
                                                rounded-md overflow-hidden 
                                            "
                                        >
                                            {nav_menu_list.map(
                                                (
                                                    nav_item,
                                                    nav_ind
                                                ) => {
                                                    return (
                                                        <div
                                                            key={`nav_menu_list${nav_ind}`}
                                                            className="flex items-center h-12 w-full 
                                                            pl-3 border-b border-b-slate-200 
                                                            cursor-pointer bg-white hover:bg-[--card]
                                                        "
                                                        >
                                                            <p className="font-medium text-black text-[16px]">
                                                                {
                                                                    nav_item
                                                                }
                                                            </p>
                                                        </div>
                                                    )
                                                }
                                            )}

                                            {/* menu side bar */}
                                            {seeAll && (
                                                <motion.div
                                                    className={`
                                                    absolute h-full w-[470px]
                                                    bg-transparent top-0
                                                    ${
                                                        ind <
                                                        bottom_navbar_items.length /
                                                            2
                                                            ? 'left-full pl-5'
                                                            : 'right-full pr-5'
                                                    }
                                                    transition-all 
                                                    pt-4
                                                `}
                                                    onMouseLeave={() => {
                                                        if (seeAll) {
                                                            setSeeAll(
                                                                false
                                                            )
                                                        }
                                                    }}
                                                    initial={{
                                                        scale: 0.5,
                                                        opacity: 0,
                                                        y: 15,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 0.1,
                                                            ease: 'easeIn',
                                                        },
                                                    }}
                                                >
                                                    <div
                                                        className="h-full w-full 
                                                         bg-white rounded-md 
                                                          grid grid-cols-[37%_35%_auto] gap-1 shadow-lg
                                                        "
                                                    >
                                                        <div className="h-36 pl-3 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Numbers
                                                            </p>
                                                            <ul className="list-none mt-5">
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Learning
                                                                    Numbers
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Counting
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Comparing
                                                                    Numbers
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Comparing
                                                                    Numbers
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="h-36 pl-3 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                4
                                                                Operations
                                                            </p>
                                                            <ul className="list-none mt-5">
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Addition
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Subtraction
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Multiplication
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Division
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="h-36  pl-3 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Advanced
                                                            </p>

                                                            <ul className="list-none mt-5">
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Exponents
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Proportions
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Percents
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Integers
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Algebra
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="h-32  pl-3 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Fractions
                                                                &
                                                                Decimals
                                                            </p>
                                                            <ul className="list-none mt-3">
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Fractions
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Decimals
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="h-32  pl-3 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Measurement
                                                            </p>

                                                            <ul className="list-none mt-3">
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Measurement
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Money
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Time
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="h-28  pl-3 pt-3 mt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                More
                                                            </p>

                                                            <ul className="list-none mt-3">
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Shape
                                                                    &
                                                                    Geometry
                                                                </li>
                                                                <li className="text-gray-700 text-[12px] text-left mb-1">
                                                                    Data
                                                                    &
                                                                    Graphing
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </li>
                        )
                    })}
                </ul>
                {/* become a member button container */}
                <div
                    className="h-full w-[300px]
                    flex items-center justify-center pr-24 
                "
                >
                    <div
                        className="h-full w-full flex justify-center
                        bg-[--button-primary] rounded-full transition-all duration-500
                        items-center cursor-pointer relative
                    "
                        onMouseEnter={() => {
                            setShowLoginDropdown(true)
                        }}
                        onMouseLeave={() => {
                            setShowLoginDropdown(false)
                        }}
                    >
                        <p className="text-xs font-semibold">
                            Become a Member
                        </p>

                        {showLoginDropdown && (
                            // Login Dropdown
                            <motion.div
                                className="bg-transparent h-24 w-40 flex flex-col
                                justify-end absolute top-[100%]
                            "
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -15,
                                }}
                            >
                                <div
                                    className="w-40 h-20 bg-white
                                    pt-3 pl-3 shadow-md shadow-slate-300           
                                "
                                >
                                    <p
                                        className="font-medium text-black
                                        text-[12px]
                                    "
                                    >
                                        1. Already a Member?
                                        <br />
                                        <Link
                                            href={'/login'}
                                            className="hover:underline text-black
                                                font-medium
                                            "
                                        >
                                            Login
                                        </Link>
                                    </p>
                                    <span
                                        className="no-underline
                                        font-medium text-black text-[12px]
                                    "
                                    >
                                        2.
                                        <Link
                                            href={'/register'}
                                            className="font-medium text-black
                                    text-[12px] hover:underline
                                "
                                        >
                                            Sign up
                                        </Link>
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
