import Image from 'next/image'
import Button from './_components/Button'

import Graduation from '../assets/graduation.png'
import Card from './_components/Card'

export default function Home() {
    return (
        <main className="flex min-h-screen w-screen flex-col">
            <div className="w-screen bg-white mt-28">
                {/* hero section */}
                <div className="w-screen flex h-[550px]">
                    <div
                        className="w-[50%] h-[100%] flex flex-col 
                        pl-24 gap-8 justify-center"
                    >
                        <p className="font-medium text-[40px] text-black ">
                            Explore Limitless Our{'\n'}Worksheets And
                            {'\n'} Expand Your Knowledge
                        </p>
                        <p className="text-[13px]">
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
                            title="See More"
                            onPress={() => {}}
                            width={String('See More').length * 15}
                        />
                    </div>

                    <div
                        className="w-[50%] h-[100%] flex items-center bg-white
                        justify-center                        
                    "
                    >
                        <Image
                            unoptimized
                            src={Graduation}
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
                    className="grid grid-cols-2 pl-24 pr-24
                    gap-9
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
                    className="w-full pl-24 pr-24 flex
                    gap-9 mb-24
                "
                >
                    <div className="h-full w-1/2">
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
                    <div className="h-full w-1/2">
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
