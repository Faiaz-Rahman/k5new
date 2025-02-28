import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'

export const POST = async (req: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const { session_id } = await req.json()

    // console.log('the session id from api =>', session_id)
    try {
        const session = await stripe.checkout.sessions.retrieve(
            session_id
        )

        console.log(session)
        if (session.payment_status === 'paid') {
            // Update your database to mark the user as subscribed
            // await updateUserSubscriptionStatus(session.client_reference_id, 'active');
        }

        return NextResponse.json({ session })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
}
