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

    const formattedTopicName = params.topicName.split('_')

    return (
        <>
            <div className="py-2">
                <p className="font-medium text-[10px]">
                    Maths {' > '} {formattedGrade} {' > '}{' '}
                    {formattedTopicName.map((item, index) => {
                        return item + ' '
                    })}
                </p>
            </div>
            <div
                className="py-2 mb-3 w-full
            "
            >
                <p className="font-bold text-2xl">
                    Grade 1 Number Pattern Worksheets
                </p>
            </div>
        </>
    )
}
