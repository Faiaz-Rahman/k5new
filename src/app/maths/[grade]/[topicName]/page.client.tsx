'use client'

import Slider from '@/app/_components/Slider'
import WorksheetList from '@/app/_components/WorksheetListItem'

import { RootState } from '@/lib/store'
import { db } from '@/utils/firebase'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { doc, getDoc } from 'firebase/firestore'

import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export interface worksheetDataType {
  craetedAt: string
  gradeLevel: string
  isPaid: boolean
  publicUrl: string
  subtitle: string
  tags: Array<string>
  title: string
  topicName: string
}

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
  const { user } = useSelector((state: RootState) => state.auth)

  const [focusedInd, setfocusedInd] = useState<number>(1)
  const [style, setStyle] = useState<number>(0)

  const [worksheets, setWorksheets] =
    useState<Array<worksheetDataType>>()

  const [clientSecret, setClientSecret] = useState<string>('')

  const formattedGrade =
    params.grade.charAt(0).toUpperCase() + params.grade.slice(1)

  const hasFetchedDataOnce = useRef<boolean>(false)

  const formattedTopicName = params.topicName.split('-')
  const [hasLoaded, setHasLoaded] = useState<boolean>()

  const getClientSecret = async () => {
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ id: 'xl-tshirt' }],
        }),
      })

      const resJson = await res.json()

      setClientSecret(resJson.clientSecret)
    } catch (error) {
      console.log(
        'error while posting to create-payment-intent',
        error,
      )
    }
  }

  const fetchWorksheetsFromFb = async () => {
    const docId = formattedTopicName
      .map((topic, _) => {
        return topic.charAt(0).toUpperCase() + topic.slice(1)
      })
      .join(' ')

    const docRef = doc(db, formattedGrade, docId)

    try {
      const doc = await getDoc(docRef)

      if (doc.exists()) {
        const docData = doc.data()

        setWorksheets(
          docData?.worksheetData as Array<worksheetDataType>,
        )
        setHasLoaded(true)
      } else {
        setWorksheets([])
        setHasLoaded(true)
      }
    } catch (error) {
      console.log('error while retrieving worksheets from fb', error)
    }
  }

  useEffect(() => {
    if (!hasFetchedDataOnce.current) {
      if (user?.uid) {
        getClientSecret()
      }
      fetchWorksheetsFromFb()

      hasFetchedDataOnce.current = true
    }
  }, [])

  if (!hasLoaded) {
    return (
      <div className="flex flex-1">
        <div
          className="w-full h-screen flex pt-[20%]
            justify-center
          "
        >
          Loading ...
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="py-2">
        <p className="font-medium text-[10px]">
          Maths {' > '} {formattedGrade} {' > '}{' '}
          {formattedTopicName.map((item, _) => {
            return item.charAt(0).toUpperCase() + item.slice(1) + ' '
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
            return item.charAt(0).toUpperCase() + item.slice(1) + ' '
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime animi, rem tempore necessitatibus similique delectus
          vel corporis omnis repellat numquam vitae cumque voluptas
          non porro itaque placeat et. Dolorem at dolorum doloremque
          neque vel sed, magni numquam impedit libero debitis animi,
          dolores placeat quibusdam. Fuga debitis earum iure in fugit.
        </p>
      </div>

      <div
        className="flex flex-col w-[100%] 
                gap-1 lg:w-[80%] mt-5"
      >
        {worksheets && worksheets.length > 0 ? (
          worksheets.map((worksheet, index) => {
            return <WorksheetList key={index} item={worksheet} />
          })
        ) : (
          <div
            className="w-full border border-gray-300 rounded-md
                        text-sm h-36 flex items-center justify-center mt-10 font-light"
          >
            No Worksheets available !!!
          </div>
        )}
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
            clientKey={clientSecret}
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequatur natus distinctio voluptatum provident veritatis
          saepe, sit eligendi nisi beatae, ipsa expedita, mollitia
          dolorum culpa quidem? Aspernatur laudantium itaque
          recusandae quod iste accusantium illum possimus non harum
          suscipit. Soluta officia possimus aliquid laboriosam,
          necessitatibus alias! Ipsum nihil repudiandae iure saepe
          quidem?
        </p>

        <p className="font-semibold text-[16px] mt-10">
          What is WittyWorkbooks?
        </p>
        <p className="font-normal text-[12px] mt-3 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequatur natus distinctio voluptatum provident veritatis
          saepe, sit eligendi nisi beatae, ipsa expedita, mollitia
          dolorum culpa quidem? Aspernatur laudantium itaque
          recusandae quod iste accusantium illum possimus non harum
          suscipit. Soluta officia possimus aliquid laboriosam,
          necessitatibus alias! Ipsum nihil repudiandae iure saepe
          quidem?
        </p>
      </div>
    </main>
  )
}
