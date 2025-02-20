import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
    const { priceId } = await req.json()

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${req.headers.get(
                'origin'
            )}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get(
                'origin'
            )}/subscription-plans`,
        })

        return NextResponse.json(
            { sessionId: session.id },
            { status: 200 }
        )
    } catch (error) {
        console.log('error in checkout session =>', error)
        return NextResponse.json(
            {
                error: 'error while creating checkout session',
            },
            { status: 500 }
        )
    }
}
