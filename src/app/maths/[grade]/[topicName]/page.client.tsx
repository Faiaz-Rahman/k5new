'use client'

export default function TopicWiseMathClient({
    params,
}: {
    params: {
        grade: string
        topicName: string
    }
}) {
    return (
        <p>
            Topic wise math client with {params.grade} and{' '}
            {params.topicName}{' '}
        </p>
    )
}
