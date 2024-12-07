'use client'

import Slider from '@/app/_components/Slider'
import { image_assets_arr } from '@/app/_constants'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function TopicWiseMathClient({
    params,
}: {
    params: {
        grade: string
        topicName: string
    }
}) {
    const data: number[] = [1, 2, 3, 4, 5, 6]
    const divRef = useRef<HTMLDivElement>(null)

    const data_for_worksheet: number[] = [1, 2, 3, 4, 5]

    const [focusedInd, setfocusedInd] = useState<number>(1)
    const [style, setStyle] = useState<number>(0)

    const formattedGrade =
        params.grade.charAt(0).toUpperCase() + params.grade.slice(1)

    const formattedTopicName = params.topicName.split('-')

    return (
        <>
            <div className="py-2">
                <p className="font-medium text-[10px]">
                    Maths {' > '} {formattedGrade} {' > '}{' '}
                    {formattedTopicName.map((item, index) => {
                        return (
                            item.charAt(0).toUpperCase() +
                            item.slice(1) +
                            ' '
                        )
                    })}
                </p>
            </div>
            <div
                className="py-2 mb-3 w-full
            "
            >
                <p className="font-bold text-2xl">
                    {formattedGrade}{' '}
                    {formattedTopicName.map((item, index) => {
                        return (
                            item.charAt(0).toUpperCase() +
                            item.slice(1) +
                            ' '
                        )
                    })}{' '}
                    Worksheets
                </p>
            </div>
            <div
                className="
                text-[14px] w-full pr-5 lg:pr-40"
            >
                <p className="font-semibold text-md">
                    Number and counting pattern worksheets
                </p>

                <p className="mt-5 font-normal text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Maxime animi, rem tempore necessitatibus
                    similique delectus vel corporis omnis repellat
                    numquam vitae cumque voluptas non porro itaque
                    placeat et. Dolorem at dolorum doloremque neque
                    vel sed, magni numquam impedit libero debitis
                    animi, dolores placeat quibusdam. Fuga debitis
                    earum iure in fugit.
                </p>
            </div>

            <div
                className="flex flex-col w-[100%] 
                py-3 gap-1 lg:w-[80%]"
            >
                {data_for_worksheet.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex w-[100%]
                            border-b border-b-gray-400
                            items-center justify-between py-1
                            lg:w-[80%]
                            "
                        >
                            <div
                                className="flex flex-col h-full w-[100%5
                "
                            >
                                <p className="font-normal text-sm">
                                    Patterns of object
                                </p>
                                <p className="font-normal text-sm">
                                    What comes next?
                                </p>
                            </div>

                            <Image
                                height={60}
                                width={50}
                                unoptimized
                                src={image_assets_arr[index]}
                                alt=""
                                objectFit="contain"
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    )
                })}
            </div>

            <div
                className={`hidden lg:flex lg:items-center
                lg:justify-between lg:relative lg:h-[400px] lg:w-[675px]
                lg:overflow-x-hidden
            `}
                ref={divRef}
            >
                {/* slider */}
                <div
                    className="flex justify-center
                    h-full items-center
                    flex-row gap-1
                "
                >
                    <Slider
                        data={data}
                        focusedInd={focusedInd}
                        setFocusedInd={setfocusedInd}
                        style={style}
                        setStyle={setStyle}
                    />
                </div>

                {/* left button */}
                <div
                    role="button"
                    onClick={() => {
                        if (focusedInd >= 1) {
                            setfocusedInd((prev) => prev - 1)
                            setStyle((prev) => prev + 230)
                        }
                    }}
                    className="absolute h-10 w-10 bg-[--card]
                        rounded-full left-0 flex justify-center items-center
                        shadow-md
                     "
                >
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-white"
                    />
                </div>
                {/* right button */}
                <div
                    role="button"
                    onClick={() => {
                        if (focusedInd < data.length - 1) {
                            setfocusedInd((prev) => prev + 1)
                            setStyle((prev) => prev - 230)
                        }
                    }}
                    className="absolute h-10 w-10 bg-[--card]
                        rounded-full right-0 flex justify-center items-center
                        shadow-md
                    "
                >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-white"
                    />
                </div>
            </div>

            <div
                className="w-full lg:pr-40
            "
            >
                <p className="font-semibold text-[16px]">
                    More Numbers Worksheets
                </p>
                <p className="font-normal text-[12px] mt-3">
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Consequatur natus distinctio
                    voluptatum provident veritatis saepe, sit eligendi
                    nisi beatae, ipsa expedita, mollitia dolorum culpa
                    quidem? Aspernatur laudantium itaque recusandae
                    quod iste accusantium illum possimus non harum
                    suscipit. Soluta officia possimus aliquid
                    laboriosam, necessitatibus alias! Ipsum nihil
                    repudiandae iure saepe quidem?
                </p>

                <p className="font-semibold text-[16px] mt-10">
                    What is WittyWorkbooks?
                </p>
                <p className="font-normal text-[12px] mt-3 mb-10">
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Consequatur natus distinctio
                    voluptatum provident veritatis saepe, sit eligendi
                    nisi beatae, ipsa expedita, mollitia dolorum culpa
                    quidem? Aspernatur laudantium itaque recusandae
                    quod iste accusantium illum possimus non harum
                    suscipit. Soluta officia possimus aliquid
                    laboriosam, necessitatibus alias! Ipsum nihil
                    repudiandae iure saepe quidem?
                </p>
            </div>
        </>
    )
}
