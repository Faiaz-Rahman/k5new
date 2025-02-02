import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = require('stripe')(
    process.env.STRIPE_SECRET_KEY as string
)

const calculateOrderAmount = (items: number) => {
    return items
}

export async function POST(req: Request) {
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
        if (paymentIntent.client_secret) {
            console.log(
                'successfully retrieved client secret: ',
                paymentIntent.client_secret
            )

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
