import TopicWiseMathClient from './page.client'

export async function generateMetadata({
    params,
}: {
    params: {
        grade: string
        topicName: string
    }
}) {
    const formattedGrade =
        params.grade.charAt(0).toUpperCase() + params.grade.slice(1)
    const splittedTopicName = params.topicName.split(' ')

    const formattedTopicName = splittedTopicName
        .map((item, ind) => {
            return ind !== splittedTopicName.length - 1
                ? item
                      .charAt(0)
                      .toUpperCase()
                      .concat(`${item.slice(1)}-`)
                : item
                      .charAt(0)
                      .toUpperCase()
                      .concat(`${item.slice(1)}`)
        })
        .join('')

    return {
        title: `Maths | ${formattedGrade} | ${formattedTopicName}`,
        description: `${formattedTopicName} Maths for ${formattedGrade} grade`,
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
