import { Metadata } from 'next'
import TopicWiseMathClient from './page.client'

export const metadata: Metadata = {
    title: 'Math | ',
    description: 'Topic-wise Maths',
}

export default function TopicWiseMath({
    params,
}: {
    params: {
        grade: string
        topicName: string
    }
}) {
    return (
        <>
            <TopicWiseMathClient params={params} />
        </>
    )
}
