'use client'

import React, { useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
)

interface subscriptionPlanType {
    id: string
    billing_scheme: string
    interval: string
    price_id: string
    price: number
    currency: string
    name: string
    description: null | string
}

export default function Subscription() {
    const [plans, setPlans] = useState<Array<subscriptionPlanType>>(
        []
    )
    const [selectedPlan, setSelectedPlan] =
        useState<subscriptionPlanType>()

    const hasFetchedData = useRef<boolean>(false)
    const [showDialog, setShowDialog] = useState<boolean>(false)

    const getSubscriptionPlans = async () => {
        const resp = await fetch('/api/subscription-plans', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (resp.ok) {
            const respJsonData = await resp.json()
            console.log(
                'the json resp for subscription plan is ...',
                respJsonData
            )

            setPlans(respJsonData)
        }
    }

    const handleSubscription = async () => {
        const stripe = await stripePromise

        const sessionIdResp = await fetch('/api/checkout-session', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId: selectedPlan?.price_id }),
        })

        const sessionId = await sessionIdResp.json()

        console.log('the session id =>', sessionId)

        const resp = await stripe?.redirectToCheckout({ sessionId })

        if (resp?.error) {
            console.log('got error while redirecting to checkout')
        }
    }

    React.useEffect(() => {
        if (!hasFetchedData.current) {
            getSubscriptionPlans()

            hasFetchedData.current = true
        }
    }, [])

    return (
        <div
            className="h-screen flex flex-col-reverse w-screen pl-[20px] 
                pt-24 pr-[20px]
                lg:pl-24 lg:flex-row lg:pt-40 lg:pr-24 lg:justify-center"
        >
            <div className="mb-10 w-3/5 flex justify-around mt-10 gap-x-10">
                {plans.map((plan, _) => (
                    <Card
                        key={plan.id}
                        className={`w-full max-w-md p-6 shadow-lg border-4 h-[250px]
                        rounded-2xl ${
                            plan.name === 'Gold'
                                ? 'border-[#FFD700]'
                                : 'border-gray-300'
                        }`}
                    >
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">
                                {plan.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-gray-800">
                                ${(plan.price / 100).toFixed(2)}
                                <span className="font-normal text-sm ml-2">
                                    {plan.name == 'Gold'
                                        ? '/ 6 months'
                                        : '/ month'}
                                </span>
                            </p>

                            {/* @here */}
                            {/* features for plans */}

                            {/* <ul className="mt-4 space-y-2">
                                {plan.features.map(
                                    (feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2 text-gray-600"
                                        >
                                            <Check className="w-5 h-5 text-green-500" />{' '}
                                            {feature}
                                        </li>
                                    )
                                )}
                            </ul> */}
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full"
                                onClick={() => {
                                    setShowDialog(true)
                                    setSelectedPlan(plan)
                                }}
                            >
                                Subscribe Now
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Dialog
                open={showDialog}
                onOpenChange={(val) => setShowDialog(val)}
            >
                <DialogTrigger></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Wittyworkbooks</DialogTitle>
                        <DialogDescription>
                            You are about to purchase{' '}
                            {selectedPlan?.name} plan for $
                            {selectedPlan?.price
                                ? (selectedPlan?.price / 100).toFixed(
                                      2
                                  )
                                : ''}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <DialogFooter>
                            <Button
                                onClick={() => {
                                    setShowDialog(false)
                                }}
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={() => {
                                    // @here
                                    // subscription logic
                                }}
                            >
                                Purchase
                            </Button>
                        </DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
