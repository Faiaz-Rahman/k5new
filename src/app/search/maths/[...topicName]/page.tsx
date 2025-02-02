import SearchResultPageClient from './page.client'

export async function generateMetadata({
    params,
}: {
    params: {
        topicName: string
    }
}) {
    const splittedTopicName = params.topicName[0].split('-')

    const formattedTopicName = splittedTopicName
        .map((item, ind) => {
            return ind !== splittedTopicName.length - 1
                ? item
                      .charAt(0)
                      .toUpperCase()
                      .concat(`${item.slice(1)} `)
                : item
                      .charAt(0)
                      .toUpperCase()
                      .concat(`${item.slice(1)}`)
        })
        .join('')

    return {
        title: `Maths | ${formattedTopicName}`,
        description: `Search results for ${formattedTopicName} Maths`,
    }
}

export default function SearchResultServer({
    params,
}: {
    params: {
        topicName: string
    }
}) {
    return (
        <>
            <SearchResultPageClient params={params} />
        </>
    )
}
