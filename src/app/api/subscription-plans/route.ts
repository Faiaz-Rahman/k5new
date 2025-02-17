import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET() {
    try {
        const prices = await stripe.prices.list({
            expand: ['data.product'],
            active: true,
            type: 'recurring',
        })

        const plans = prices.data.map((price) => {
            const product = price.product as Stripe.Product

            return {
                id: price.id,
                billing_scheme: price.billing_scheme,
                interval: price.recurring?.interval,
                price_id: price.id,
                price: price.unit_amount,
                currency: price.currency,
                name: product.name,
                description: product.description,
            }
        })
        return NextResponse.json(plans, { status: 200 })
    } catch (error) {
        console.log(
            'the error from stripe fetching product data =>',
            error
        )

        return NextResponse.json(
            {
                error: 'error fetching subscription plans from stripe',
            },
            { status: 500 }
        )
    }
}
