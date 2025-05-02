import { worksheetDataType } from '@/app/maths/[grade]/[topicName]/page.client'
import Image from 'next/image'
import React from 'react'

export default function WorksheetList({
  item,
}: {
  item: worksheetDataType
}) {
  return (
    <div
      className="flex w-full h-20
                        border-b border-b-gray-400
                        items-center justify-between
                      hover:bg-gray-100 px-3 py-1
                        rounded-t-md hover:cursor-pointer
                    "
    >
      <div
        className="flex flex-col h-full w-[100%] 
                                        justify-center gap-y-3
    
                                    "
      >
        <p className="font-sans text-sm font-semibold">
          {item.title}
        </p>
        <div className="flex items-center gap-3">
          <p className="font-sans text-xs font-light">
            {item.subtitle}
          </p>

          {item.tags.map((worksheet_tags, _) => {
            return (
              <div
                className="h-6 px-2 bg-yellow-200 flex items-center
                                justify-center rounded-md"
              >
                <p className="text-xs font-extralight text-black">
                  {worksheet_tags}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="h-full w-[76px] rounded-lg overflow-hidden">
        <Image
          src={item.publicUrl}
          alt="preview"
          height={72}
          width={76}
          className="w-[76px] h-[70px] object-fill"
        />
      </div>
    </div>
  )
}
