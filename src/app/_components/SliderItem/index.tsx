'use client'

import React from 'react'
import './index.css'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { image_assets_arr } from '@/app/_constants'
import Image from 'next/image'
import { getSession } from 'next-auth/react'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

interface SliderItemProps {
  item: number
  transform: number
  height: number
  width: number
  clientKey: string
}

export default function SliderItem({
  item,
  transform,
  height,
  width,
  clientKey,
}: SliderItemProps) {
  const router = useRouter()

  const { isLoggedIn } = useSelector((state: RootState) => state.auth)

  return (
    <div
      key={item}
      className={`
                bg-white flex items-center 
                justify-center transition-all
                duration-500
                border border-gray-400 border-solid
                overflow-hidden rounded-xl relative
                group 
                `}
      style={{
        transform: `translateX(${transform}px)`,
        height,
        width,
      }}
    >
      <Image
        src={image_assets_arr[item - 1]}
        alt=""
        className="object-contain transition-all
                    duration-300 
                "
        layout="fill"
        sizes="responsive"
        style={{
          objectFit: 'contain',
        }}
      />

      <div
        className="w-full h-0 bg-[--card] opacity-0
                absolute bottom-0 left-0 transition-all 
                hover:opacity-40 group-hover:h-full 
                duration-500 flex items-center
                justify-center flex-col group-hover:cursor-pointer
            "
        onClick={async () => {
          const latestSession = await getSession()
          if (latestSession === null && !isLoggedIn) {
            toast('WittyWorkbooks', {
              description: `Log in to get access to free worksheets.`,
            })
          } else {
            // @here
            if (clientKey) {
              console.log(
                'the clientSecret from SliderItem is: ',
                clientKey,
              )
              router.prefetch('/subscription')
              router.push(`/subscription`)
            }
          }
        }}
      >
        <FontAwesomeIcon
          icon={faLock}
          className="text-cyan-950 font-bold text-[20px]"
        />
        <p
          className="text-cyan-950 font-bold text-[14px]
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
