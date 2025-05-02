import { worksheetDataType } from '@/app/maths/[grade]/[topicName]/page.client'
import { RootState } from '@/lib/store'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'

interface routerParamsType {
  params: { grade: string; topicName: string }
}

export default function WorksheetList({
  item,
}: {
  item: worksheetDataType
}) {
  const router = useRouter()
  const { topicName } = useParams()
  const { subscription, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  )

  const handleNav = () => {
    if (!item.isPaid) {
      router.push(`/worksheet/free/${topicName}`)
    } else {
      if (isLoggedIn) {
        if (subscription.isSubscribed) {
          router.push(`/worksheet/${topicName}`)
        } else {
          toast('WittyWorkbooks', {
            description: `Buy a subscription to access this worksheet`,
          })
        }
      } else {
        toast('WittyWorkbooks', {
          description: `Log into your account to access this worksheet.`,
        })
      }
    }
  }

  return (
    <div
      className="flex w-full h-20
        border-b border-b-gray-400
        items-center justify-between
        hover:bg-gray-100 px-3 py-1
        rounded-t-md hover:cursor-pointer
      "
      onClick={handleNav}
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
          className="w-[76px] h-[72px] object-fill"
        />
      </div>
    </div>
  )
}
