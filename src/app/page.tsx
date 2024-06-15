import Image from 'next/image'
import Button from './_components/Button'

import Graduation from '../assets/graduation.png'

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
                            src={Graduation}
                            alt="Graduation"
                            style={{
                                height: '85%',
                                width: '80%',
                            }}
                        />
                    </div>
                </div>

                {/* about section */}
                <div className="w-screen pt-16">
                    <p className="font-medium text-[40px] text-black text-center">
                        About
                    </p>

                    <div className="w-screen flex h-[550px] items-center">
                        <div
                            className="w-[50%] h-[100%] flex flex-col 
                        pl-24 gap-8 justify-center"
                        >
                            <p className="font-medium text-[30px] text-black">
                                Explore Limitless Our Worksheets{'\n'}
                                And Expand Your Knowledge
                            </p>
                            <p className="text-[13px]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore voluptatum
                                eveniet eius perspiciatis magnam quo,
                                quia, vel temporibus facilis porro
                                ipsam impedit alias esse adipisci
                                reprehenderit! Dolore laudantium sed
                                corporis.
                            </p>

                            <Button
                                title="Explore Now"
                                onPress={() => {}}
                                width={
                                    String('Explore Now').length * 15
                                }
                            />
                        </div>

                        <div
                            className="w-[50%] h-[100%] flex items-center bg-white
                        justify-center                        
                    "
                        >
                            <Image
                                src={Graduation}
                                alt="Graduation"
                                style={{
                                    height: '85%',
                                    width: '80%',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
