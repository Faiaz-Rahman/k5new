import { NextRequest } from 'next/server'
import Stripe from 'stripe'

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY!)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const calculateOrderAmount = (items: number) => {
    return items
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    if (req.method !== 'POST') {
        return Response.json(
            { error: 'method must be post' },
            { status: 405 }
        )
    }
    console.log('request body from server =>', body)

    try {
        const paymentIntent: Stripe.PaymentIntent =
            await stripe.paymentIntents.create({
                amount: calculateOrderAmount(100),
                currency: 'eur',
                automatic_payment_methods: {
                    enabled: true,
                },
            })

        // const session = await stripe.checkout.sessions.create({
        //     mode: 'subscription',
        //     payment_method_types: ['card'],
        //     line_items: [
        //         {
        //             price: '100',
        //             quantity: 1,
        //         },
        //     ],
        //     success_url: `${req.headers.get(
        //         'origin'
        //     )}/success?session_id={CHECKOUT_SESSION_ID}`,
        //     cancel_url: `${req.headers.get('origin')}/subscriptions`,
        // })

        if (paymentIntent.client_secret) {
            return Response.json(
                { clientSecret: paymentIntent.client_secret },
                { status: 200 }
            )
        } else {
            return Response.json(
                { error: 'internal server error' },
                { status: 500 }
            )
        }
    } catch (error) {
        console.log('error from create-payment-intent', error)
        return Response.json(
            { error: 'internal server error' },
            { status: 500 }
        )
    }
}
