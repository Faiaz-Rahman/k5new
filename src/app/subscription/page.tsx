'use client'

import React, { useRef } from 'react'

import { useState, useEffect } from 'react'
import {
    loadStripe,
    StripeElementsOptionsClientSecret,
} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CompletePage from '@/components/CompletePage'
import CheckoutForm from '@/components/CheckoutForm'

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
)

export default function Subscription() {
    const [clientSecret, setClientSecret] = useState<string | null>(
        null
    )

    const [confirmed, setConfirmed] = useState<string | null>(null)

    const [options, setOptions] =
        useState<StripeElementsOptionsClientSecret>({
            clientSecret: '',
            appearance: { theme: 'stripe' },
        })

    const urlSearchParams = new URLSearchParams(
        window.location.search
    ).get('payment_intent_client_secret')

    if (urlSearchParams) {
        console.log('found the clientSecret')
        setClientSecret(urlSearchParams)
        setConfirmed(urlSearchParams)

        console.log(
            'the url Search Params inside subscription =>',
            urlSearchParams
        )
    }

    return (
        <Elements stripe={stripePromise}>
            {/* {confirmed ? (
                        <CheckoutForm clientSecret={clientSecret} />
                    ) : (
                        <CompletePage />
                    )} */}
            <CheckoutForm clientSecret={clientSecret!} />
        </Elements>
    )
}

// ;<div
//     className="w-screen pl-[20px]
//                 pt-24 pr-[20px] h-screen bg-red-50
//                 lg:pl-24 lg:flex-row lg:pt-40 lg:pr-24"
// ></div>
