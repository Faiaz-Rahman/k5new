'use client'

import { FormEvent, useState } from 'react'
import {
    PaymentElement,
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js'

import Stripe from 'stripe'
import {
    StripeCardElement,
    StripeCardElementOptions,
    StripePaymentElementOptions,
} from '@stripe/stripe-js'

export default function CheckoutForm({
    clientSecret,
}: {
    clientSecret: string
}) {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)

    const [cardElement, setCardElement] = useState<any>()

    if (elements) {
        setCardElement(elements.getElement(CardElement))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!stripe || !elements) {
            console.log('stripe has not loaded yet')
            return
        }

        const card: StripeCardElement | null =
            elements.getElement(CardElement)

        console.log('stripe from checkout =>')
        setIsLoading(true)

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/ABC',
            },
        })

        // if (
        //     error &&
        //     (error.type === 'card_error' ||
        //         error.type === 'validation_error')
        // ) {
        //     if (error instanceof Stripe.errors.StripeError) {
        //         setMessage(error)
        //     }
        // } else {
        //     setMessage('An unexpected error occurred.')
        // }

        setIsLoading(false)
    }

    const paymentElementOptions: StripePaymentElementOptions = {
        layout: 'accordion',
    }

    const cardPaymentOption: StripeCardElementOptions = {
        iconStyle: 'solid',
        hidePostalCode: true,
        preferredNetwork: [],
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement
                id="payment-element"
                options={cardPaymentOption}
            />
            <button
                disabled={isLoading || !stripe || !elements}
                id="submit"
            >
                <span id="button-text">
                    {isLoading ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                        'Pay now'
                    )}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
}
