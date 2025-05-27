'use client'

import React from 'react'
import { worksheetDataType } from '@/app/maths/[grade]/[topicName]/page.client'
import Image from 'next/image'

export default function PaidWorksheet() {
  const [worksheetDetails, setWorksheetDetails] =
    React.useState<worksheetDataType>()

  const getData = async () => {
    const data = localStorage.getItem('worksheetDetails')
    if (data) {
      setWorksheetDetails(JSON.parse(data))
      console.log('the data is =>', data)
    }
  }

  React.useEffect(() => {
    getData()

    return () => {
      localStorage.removeItem('worksheetDetails')
    }
  }, [])

  return (
    <main>
      <h3 className="text-2xl font-bold">
        {worksheetDetails?.title}
      </h3>

      <p className="font-light text-sm mt-4">
        {worksheetDetails?.subtitle}
      </p>

      <div className="flex gap-x-3 mt-3 mb-5">
        {worksheetDetails?.tags.map(
          (worksheet_tags, _worksheet_tag_ind) => {
            return (
              <div
                key={`${worksheet_tags}_${_worksheet_tag_ind}`}
                className="h-6 px-2 bg-yellow-200 flex items-center
              justify-center rounded-md"
              >
                <p className="text-xs font-extralight text-black">
                  {worksheet_tags}
                </p>
              </div>
            )
          }
        )}
      </div>

      {worksheetDetails?.publicUrl && (
        <div className="mb-16">
          <Image
            src={worksheetDetails?.publicUrl}
            alt="preview"
            height={250}
            width={290}
            className="object-cover"
          />
        </div>
      )}
    </main>
  )
}
