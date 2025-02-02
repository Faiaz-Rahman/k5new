import { topic_name } from '@/app/_constants'

import { NextResponse } from 'next/server'

const topics: Record<string, string[]> = {
    kindergarden: topic_name,
    '1': topic_name,
    '2': topic_name,
    '3': topic_name,
    '4': topic_name,
    '5': topic_name,
    all: topic_name,
}

export async function POST(req: Request) {
    try {
        const body = await req.json()

        if (!body.data || !body.data.grade) {
            return NextResponse.json(
                {
                    error: 'missing grade in request body',
                },
                { status: 400 }
            )
        }

        const grade = body.data.grade
        const topicForGrade = topics[grade] || []

        return NextResponse.json(
            { topics: topicForGrade },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'invalid request!' },
            { status: 400 }
        )
    }
}
