import React from 'react'
import './index.css'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { image_assets_arr } from '@/app/_constants'

interface SliderItemProps {
    item: number
    transform: number
    height: number //How much is it going to translate?
    width: number
}

export default function SliderItem({
    item,
    transform,
    height,
    width,
}: SliderItemProps) {
    return (
        <div
            key={item}
            className={`
                bg-white flex items-center 
                justify-center transition-all
                duration-500
                border border-gray-400 border-solid
                overflow-hidden rounded-xl
                group 
                `}
            style={{
                transform: `translateX(${transform}px)`,
                height,
                width,
            }}
        >
            <img
                src={image_assets_arr[item - 1]}
                alt=""
                className="object-contain transition-all
                    duration-300 
                "
                style={{
                    height: height * 0.98,
                    width,
                }}
            />

            <div
                className="w-full h-0 bg-red-100 opacity-0
                absolute bottom-0 left-0 transition-all 
                hover:opacity-40 group-hover:h-full 
                duration-500 flex items-center
                justify-center flex-col 
            "
            >
                <FontAwesomeIcon
                    icon={faLock}
                    className="text-red-700 font-bold text-[20px]"
                />
                <p
                    className="text-red-700 font-bold text-[14px]
                text-center
                "
                >
                    Subscribe
                    <br />
                    to unlock!
                </p>
            </div>
        </div>
    )
}
