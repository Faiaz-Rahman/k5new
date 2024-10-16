'use client'
import Image from 'next/image'
import Button from './_components/Button'

import Education from '../assets/education.png'
import Card from './_components/Card'
import { useSelector } from 'react-redux'
// import { RootState } from '@/lib/store'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // throw new Error('Internal Error! Cannot load Wittyworkbooks.')
    }, [])

    return (
        <main className="flex min-h-screen w-screen flex-col">
            <div className="w-screen bg-white mt-28 lg:mt-40">
                {/* hero section */}
                <div
                    className="w-screen flex flex-col justify-center
                    lg:w-screen lg:flex lg:h-[550px] lg:flex-row
                "
                >
                    {/* <div
                        className="w-[50%] h-[100%] flex flex-col 
                        pl-24 gap-8 justify-center"
                    > */}
                    <div
                        className="w-full h-full flex flex-col justify-center
                        pl-[39px] pr-[39px] gap-5 items-center

                        lg:w-[50%] lg:h-[100%] lg:flex lg:flex-col 
                        lg:pl-24 lg:gap-8 lg:justify-center lg:items-start
                    "
                    >
                        {/* <p className="font-medium text-[40px] text-black ">
                            Explore Limitless Our{'\n'}Worksheets And
                            {'\n'} Expand Your Knowledge
                        </p> */}
                        <p
                            className="font-medium text-[24px] text-black
                            text-center

                            lg:font-medium lg:text-[40px] lg:text-black 
                            lg:text-left
                        "
                        >
                            Explore Limitless Our Worksheets And
                            Expand Your Knowledge
                        </p>
                        <p
                            className="text-[12px] font-normal text-black 
                            text-center
                            lg:text-[16px] lg:text-left
                        "
                        >
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Temporibus esse alias
                            deserunt pariatur, accusamus perferendis
                            consequuntur dolore ipsam quisquam
                            officiis suscipit minima odio architecto
                            aliquid officia reprehenderit, consectetur
                            delectus doloribus quas! Iste voluptatum
                            ratione quod.
                        </p>

                        <Button
                            title="Explore Now"
                            onPress={() => {}}
                            width={String('Explore Now').length * 15}
                        />
                    </div>

                    {/* <div
                        className="w-[50%] h-[100%] flex items-center bg-white
                        justify-center                        
                    "
                    > */}
                    <div
                        className="w-full flex items-center bg-white
                        justify-center
                        
                        lg:w-[50%] lg:h-[100%] lg:flex lg:items-center lg:bg-white
                        lg:justify-center 
                        "
                    >
                        <Image
                            unoptimized
                            src={Education}
                            alt="Graduation"
                            style={{
                                height: '85%',
                                width: '80%',
                            }}
                        />
                    </div>
                </div>

                {/* cards section */}
                <div
                    className="grid grid-cols-2 pl-[20px] pr-[20px]
                    gap-[20px] lg:pl-24 lg:pr-24 lg:gap-[38px] lg:mt-16
                "
                >
                    <Card title="Worksheet Tab" />
                    <Card title="Workbook Tab" />
                    <Card title="Math Flashcards" />
                    <Card title="Color by Number" />
                    <Card title="Coloring Pages" />
                    <Card title="Online Worksheets/Planner" />
                </div>

                {/* latest/top selling section */}
                <div
                    className="w-full pl-[20px] pr-[20px] flex
                    gap-10 mb-24 flex-col 
                    lg:pr-24 lg:pl-24 lg:flex-row
                "
                >
                    <div className="h-full w-full lg:w-1/2">
                        <p
                            className="text-black text-[18px] font-semibold
                            mb-7
                        "
                        >
                            Latest From WittyWorksheets
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            Numbers & Counting
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            Number Patterns
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            Comparing Numbers
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            Base Ten Blocks
                        </p>
                    </div>
                    <div className="h-full w-full lg:w-1/2">
                        <p
                            className="text-black text-[18px] font-semibold
                            mb-7
                        "
                        >
                            Our Top Selling Product
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            Measurement
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            Number Patterns
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            The Turtle
                        </p>
                        <p
                            className="text-black text-[15px] font-normal mb-2
                        "
                        >
                            Word Problems
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
