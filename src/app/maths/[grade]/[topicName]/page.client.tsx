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
        <div className="w-full bg-red-50 min-h-screen">
            <p>
                Topic wise math client with {params.grade} and{' '}
                {params.topicName}{' '}
            </p>
        </div>
    )
}
