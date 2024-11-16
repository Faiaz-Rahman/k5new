import { Metadata } from 'next'
import TopicWiseMathClient from './page.client'

// export const metadata: Metadata = {
//     title: 'Maths ',
//     description: 'Topic-wise Maths',
// }

export async function generateMetadata({
    params,
}: {
    params: {
        grade: string
        topicName: string
    }
}) {
    return {
        title: `Maths | ${params.grade} | ${params.topicName}`,
        description: `${params.topicName} Maths for ${params.grade} grade`,
    }
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
