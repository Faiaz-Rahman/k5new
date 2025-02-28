import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'

export async function POST(req: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const { session_id } = await req.json()

    try {
        const session = await stripe.checkout.sessions.retrieve(
            session_id
        )

        console.log(session)
        if (session.payment_status === 'paid') {
            // await updateUserSubscriptionStatus(session.client_reference_id, 'active');
            return NextResponse.json({ session }, { status: 200 })
        } else if (session.payment_status == 'unpaid') {
            return NextResponse.json(
                { error: 'unpaid' },
                { status: 500 }
            )
        } else {
            return NextResponse.json(
                {
                    session,
                },
                { status: 200 }
            )
        }
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
}
