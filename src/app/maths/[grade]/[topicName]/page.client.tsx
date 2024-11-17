'use client'

export default function TopicWiseMathClient({
    params,
}: {
    params: {
        grade: string
        topicName: string
    }
}) {
    const formattedGrade =
        params.grade.charAt(0).toUpperCase() + params.grade.slice(1)

    const formattedTopicName = params.topicName.split('-')

    return (
        <>
            <div className="py-2">
                <p className="font-medium text-[10px]">
                    Maths {' > '} {formattedGrade} {' > '}{' '}
                    {formattedTopicName.map((item, index) => {
                        return (
                            item.charAt(0).toUpperCase() +
                            item.slice(1) +
                            ' '
                        )
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
                        return (
                            item.charAt(0).toUpperCase() +
                            item.slice(1) +
                            ' '
                        )
                    })}{' '}
                    Worksheets
                </p>
            </div>
        </>
    )
}
