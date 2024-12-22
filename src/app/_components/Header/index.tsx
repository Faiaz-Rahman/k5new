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

import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/lib/store'
import { logout } from '@/lib/slices/authSlice'
import { signOut } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import { useRouter } from 'next/navigation'

export default function Head() {
    const router = useRouter()

    const [showLoginDropdown, setShowLoginDropdown] =
        useState<boolean>(false)

    const [showMinimizedLinkDropdown, setShowMinimizedLinkDropdown] =
        useState<string>('')

    const [menuPressed, setMenuPressed] = useState<boolean>(false)

    const toggleMenuPress = (): void => {
        setMenuPressed((prev) => !prev)
    }

    const [seeAll, setSeeAll] = useState<boolean>(false)
    const [showSuggestions, setShowSuggestions] =
        useState<boolean>(false)

    const staticSuggestionArray = [1, 2, 3]

    const operations = [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Division',
    ]

    const numbers = [
        'Learning Numbers',
        'Counting',
        'Comparing Numbers',
        'Comparing Numbers',
    ]

    const advanced = [
        'Exponent',
        'Proportions',
        'Percents',
        'Integers',
        'Algebra',
    ]

    const fractions = ['Fractions', 'Decimals']

    const measurement = ['Measurement', 'Money', 'Time']
    const more = ['Shape & Geometry', 'Graphing']

    const dispatch = useAppDispatch()
    const { isLoggedIn, user } = useSelector(
        (state) => (state as RootState).auth
    )

    const onPressLogout = async () => {
        try {
            await signOut(auth)
            dispatch(logout())
        } catch (error) {
            console.log('error while logout =>', error)
        }
    }

    const handleNavigation = (
        grade: string,
        topicName: string
    ): void => {
        const formattedGrade =
            grade.charAt(0).toLowerCase() + grade.slice(1)
        const splittedTopicName = topicName.split(' ')
        // console.log(splittedTopicName)

        const formattedTopicName = splittedTopicName
            .map((item, ind) => {
                return ind !== splittedTopicName.length - 1
                    ? item
                          .charAt(0)
                          .toLowerCase()
                          .concat(`${item.slice(1)}-`)
                    : item
                          .charAt(0)
                          .toLowerCase()
                          .concat(`${item.slice(1)}`)
            })
            .join('')

        router.push(`/maths/${formattedGrade}/${formattedTopicName}`)
    }

    // const { value } = useSelector((state: RootState) => state.auth)
    // console.log(value)

    // useEffect(() => {
    //     console.log(menuPressed)
    // }, [menuPressed])

    // const router = useRouter()

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
            <Link
                className="h-full w-2/5 items-center flex
                    pl-10 lg:hidden
                "
                href={'/'}
            >
                <p
                    className="text-black font-bold
                        text-[1.3rem]
                    "
                >
                    Logo
                </p>
            </Link>

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
                                    href="/auth/login"
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
                                    href="/auth/register"
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
                    bg-green-200
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
                    justify-center relative
                    bg-white 
                    "
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
                            onClick={() => {
                                setShowSuggestions(true)
                            }}
                            onBlur={() => {
                                setShowSuggestions(false)
                            }}
                        />
                    </div>

                    {showSuggestions && (
                        <div className="w-full absolute top-full z-20 flex flex-col gap-1">
                            {staticSuggestionArray.map(
                                (suggestion, sugg_index) => {
                                    return (
                                        <motion.div
                                            key={`suggestion${sugg_index}`}
                                            initial={{
                                                y: -20,
                                                opacity: 0,
                                            }}
                                            exit={{
                                                y: 0,
                                                opacity: 1,
                                            }}
                                            animate={{
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.12,
                                                    ease: 'easeIn',
                                                },
                                            }}
                                            className={`bg-gray-100 w-full h-10 top-[calc(100%_+_${
                                                (sugg_index + 1) * 40
                                            }px)]`}
                                        ></motion.div>
                                    )
                                }
                            )}
                        </div>
                    )}
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
                        onClick={() => {
                            router.push('/printable-worksheets')
                        }}
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
                                    if (item !== 'Browse by topic') {
                                        setShowMinimizedLinkDropdown(
                                            item
                                        )
                                    }
                                }}
                                onMouseLeave={() => {
                                    setShowMinimizedLinkDropdown('')
                                }}
                            >
                                <Link
                                    href={
                                        item === 'Browse by topic'
                                            ? '/math-by-topic'
                                            : `#`
                                    }
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
                                                            className={`flex items-center h-12 w-full 
                                                            pl-3 border-b border-b-slate-200 relative 
                                                            cursor-pointer bg-white hover:bg-[--card]
                                                            justify-between pr-3
                                                        `}
                                                            onClick={() => {
                                                                if (
                                                                    item !==
                                                                    'Browse by topic'
                                                                ) {
                                                                    if (
                                                                        nav_item !==
                                                                        'See All'
                                                                    ) {
                                                                        setShowMinimizedLinkDropdown(
                                                                            ''
                                                                        )
                                                                        handleNavigation(
                                                                            item,
                                                                            nav_item
                                                                        )
                                                                    }
                                                                }
                                                            }}
                                                            onMouseEnter={() => {
                                                                if (
                                                                    nav_ind ===
                                                                    nav_menu_list.length -
                                                                        1
                                                                ) {
                                                                    setSeeAll(
                                                                        true
                                                                    )
                                                                }
                                                            }}
                                                        >
                                                            <p
                                                                className="font-medium text-black text-xs
                                                            "
                                                            >
                                                                {
                                                                    nav_item
                                                                }
                                                            </p>
                                                            <span>
                                                                {nav_ind ===
                                                                nav_menu_list.length -
                                                                    1 ? (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faChevronRight
                                                                        }
                                                                        className="text-[10px] ml-1"
                                                                    />
                                                                ) : null}
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            )}

                                            {/* menu side bar */}
                                            {seeAll && (
                                                <motion.div
                                                    className={`
                                                    absolute h-full w-[490px]
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
                                                        <div className="h-36 pl-6 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Numbers
                                                            </p>
                                                            <ul className="list-none mt-5">
                                                                {numbers.map(
                                                                    (
                                                                        number_item,
                                                                        num_ind
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={`number_item${num_ind}`}
                                                                                className="text-gray-700 text-[12px] 
                                                                								text-left mb-1 hover:underline hover:cursor-pointer"
                                                                                onClick={() => {
                                                                                    handleNavigation(
                                                                                        item,
                                                                                        number_item
                                                                                    )
                                                                                    setShowMinimizedLinkDropdown(
                                                                                        ''
                                                                                    )
                                                                                }}
                                                                            >
                                                                                {
                                                                                    number_item
                                                                                }
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="h-36 pl-3 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                4
                                                                Operations
                                                            </p>
                                                            <ul className="list-none mt-5">
                                                                {operations.map(
                                                                    (
                                                                        operations_item,
                                                                        operations_ind
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={
                                                                                    operations_ind
                                                                                }
                                                                                className="text-gray-700 text-[12px] text-left 
                                                                mb-1 hover:underline hover:cursor-pointer"
                                                                                onClick={() => {
                                                                                    handleNavigation(
                                                                                        item,
                                                                                        operations_item
                                                                                    )
                                                                                    setShowMinimizedLinkDropdown(
                                                                                        ''
                                                                                    )
                                                                                }}
                                                                            >
                                                                                {
                                                                                    operations_item
                                                                                }
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="h-36  pl-3 pt-3 pr-7">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Advanced
                                                            </p>

                                                            <ul className="list-none mt-5">
                                                                {advanced.map(
                                                                    (
                                                                        advanced_item,
                                                                        advanced_ind
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={`advanced${advanced_ind}`}
                                                                                className="text-gray-700 text-[12px] 
                                                                text-left mb-1 hover:underline hover:cursor-pointer"
                                                                                onClick={() => {
                                                                                    handleNavigation(
                                                                                        item,
                                                                                        advanced_item
                                                                                    )
                                                                                    setShowMinimizedLinkDropdown(
                                                                                        ''
                                                                                    )
                                                                                }}
                                                                            >
                                                                                {
                                                                                    advanced_item
                                                                                }
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="h-32  pl-6 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Fractions
                                                                &
                                                                Decimals
                                                            </p>
                                                            <ul className="list-none mt-3">
                                                                {fractions.map(
                                                                    (
                                                                        fractions_item,
                                                                        fraction_ind
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={`fraction${fraction_ind}`}
                                                                                className="text-gray-700 text-[12px] text-left mb-1
                                                                    hover:underline hover:cursor-pointer
                                                                "
                                                                                onClick={() => {
                                                                                    handleNavigation(
                                                                                        item,
                                                                                        fractions_item
                                                                                    )
                                                                                    setShowMinimizedLinkDropdown(
                                                                                        ''
                                                                                    )
                                                                                }}
                                                                            >
                                                                                {
                                                                                    fractions_item
                                                                                }
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="h-32  pl-3 pt-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                Measurement
                                                            </p>

                                                            <ul className="list-none mt-3">
                                                                {measurement.map(
                                                                    (
                                                                        measurement_item,
                                                                        measurement_ind
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={`measurement${measurement_ind}`}
                                                                                className="text-gray-700 text-[12px] text-left mb-1
                                                                    hover:underline hover:cursor-pointer
                                                                "
                                                                                onClick={() => {
                                                                                    handleNavigation(
                                                                                        item,
                                                                                        measurement_item
                                                                                    )
                                                                                    setShowMinimizedLinkDropdown(
                                                                                        ''
                                                                                    )
                                                                                }}
                                                                            >
                                                                                {
                                                                                    measurement_item
                                                                                }
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                        <div className="h-28  pl-3 pt-3 mt-3 pr-3">
                                                            <p className="text-black text-left text-[14px] font-medium">
                                                                More
                                                            </p>

                                                            <ul className="list-none mt-3">
                                                                {more.map(
                                                                    (
                                                                        more_item,
                                                                        more_ind
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={`more${more_ind}`}
                                                                                className="text-gray-700 text-[12px] text-left mb-1
                                                                    						hover:underline hover:cursor-pointer
                                                                								"
                                                                                onClick={() => {
                                                                                    handleNavigation(
                                                                                        item,
                                                                                        more_item
                                                                                    )
                                                                                    setShowMinimizedLinkDropdown(
                                                                                        ''
                                                                                    )
                                                                                }}
                                                                            >
                                                                                {
                                                                                    more_item
                                                                                }
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
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
                                className="bg-transparent h-24 flex flex-col
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
                                    className="h-20 bg-white
                                    pt-3 pl-3 shadow-md shadow-slate-300 
                                    flex flex-col gap-1 pr-3
                                "
                                >
                                    <p
                                        className="font-medium text-black
                                        text-[12px]
                                    "
                                    >
                                        {isLoggedIn
                                            ? `Logged in as ${user?.email}`
                                            : '1. Already a Member'}
                                        <br />
                                        <Link
                                            href={'/auth/login'}
                                            onClick={() => {
                                                // router.push('/auth/login')

                                                onPressLogout()
                                            }}
                                            className="hover:underline text-black
                                                font-medium
                                            "
                                        >
                                            {isLoggedIn
                                                ? 'Log out'
                                                : 'Login'}
                                        </Link>
                                    </p>
                                    <span
                                        className="no-underline w-full
                                        font-medium text-black text-[12px]
                                        flex
                                    "
                                    >
                                        {isLoggedIn ? '' : '2.'}
                                        <Link
                                            onClick={() => {
                                                // router.push(
                                                //     'auth/register'
                                                // )
                                            }}
                                            href={'/auth/register'}
                                            className="font-medium text-black
                                                text-[12px] hover:underline
                                            "
                                        >
                                            {isLoggedIn
                                                ? ''
                                                : 'Sign up'}
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
