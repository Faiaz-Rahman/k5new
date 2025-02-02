'use client'

import React from 'react'

import { useState, useEffect } from 'react'
import {
    Appearance,
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
    const [clientSecret, setClientSecret] = useState<string>('')
    const [confirmed, setConfirmed] = useState(false)

    const fetchData = async () => {
        try {
            const res = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: [{ id: 'xl-tshirt' }],
                }),
            })

            const resJson = await res.json()
            setClientSecret(resJson.client_secret)
        } catch (error) {
            console.log(
                'error while posting to create-payment-intent',
                error
            )
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const appearance: Appearance = {
        theme: 'stripe',
    }
    const options: StripeElementsOptionsClientSecret = {
        clientSecret,
        appearance,
    }

    return (
        <div
            className="flex flex-col-reverse w-screen pl-[20px] 
                pt-24 pr-[20px] h-screen
                lg:pl-24 lg:flex-row lg:pt-40 lg:pr-24"
        >
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    {confirmed ? <CompletePage /> : <CheckoutForm />}
                </Elements>
            )}
        </div>
    )
}
