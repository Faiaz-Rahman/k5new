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
import LoadingUI from '../loading'
import { useDispatch } from 'react-redux'
import { updateSubscriptionStatus } from '@/lib/slices/authSlice'
import { Loader2 } from 'lucide-react'
import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

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
    const [hasLoaded, setHasLoaded] = useState<boolean>(false)
    const [subscriptionLoader, setSubscriptionLoader] =
        useState<boolean>(false)
    const { user, isLoggedIn, subscription } = useSelector(
        (state: RootState) => state.auth
    )

    const dispatch = useDispatch()
    const router = useRouter()

    const [selectedPlan, setSelectedPlan] =
        useState<subscriptionPlanType>()

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

            setPlans(respJsonData)
            setHasLoaded(true)
        }
    }

    const handleSubscription = async () => {
        if (user?.email || isLoggedIn) {
            setSubscriptionLoader(true)
            const stripe = await stripePromise

            const sessionIdResp = await fetch(
                '/api/checkout-session',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        priceId: selectedPlan?.price_id,
                    }),
                }
            )

            const sessionId = await sessionIdResp.json()
            if (selectedPlan) {
                dispatch(
                    updateSubscriptionStatus({
                        isSubscribed: true,
                        plan_name: selectedPlan?.name,
                        plan_price: `${(
                            selectedPlan?.price / 100
                        ).toFixed(2)}`,
                    })
                )
            }

            const resp = await stripe?.redirectToCheckout({
                sessionId: sessionId.sessionId as string,
            })

            if (resp?.error) {
                console.log(
                    'got error while redirecting to checkout',
                    resp?.error
                )
            }
            setSubscriptionLoader(false)
        }
    }

    React.useEffect(() => {
        getSubscriptionPlans()
    }, [])

    React.useEffect(() => {
        console.log(
            'the selected plan is =>',
            selectedPlan,
            subscription
        )
    }, [selectedPlan, subscription])

    if (!hasLoaded) {
        return <LoadingUI />
    }

    return (
        <div
            className="h-screen flex flex-col w-screen pl-[20px] 
                pt-24 pr-[20px]
                lg:pl-24 lg:pt-40 lg:pr-24 lg:justify-center"
        >
            <p className="text-2xl font-semibold text-black sm:text-3xl">
                All Subscription Plans
            </p>
            <div
                className="w-full h-full flex 
                flex-col sm:flex-row items-center gap-10 justify-center
                sm:items-start sm:pt-16
            "
            >
                {plans.map((plan, _) => (
                    <Card
                        key={plan.id}
                        className={`w-[270px] sm:min-w-md p-6 shadow-lg border-4 h-[250px]
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
                                <span className="font-normal text-xs ml-2">
                                    {plan.name == 'Gold'
                                        ? '/ 6 months'
                                        : '/ month'}
                                </span>
                            </p>

                            {/* @here */}
                        </CardContent>
                        <CardFooter>
                            <Button
                                className={`w-full ${
                                    !!user?.uid &&
                                    subscription?.isSubscribed &&
                                    subscription?.plan_name ==
                                        plan.name
                                        ? 'bg-slate-500'
                                        : 'bg-black'
                                }`}
                                onClick={() => {
                                    if (user?.uid) {
                                        setShowDialog(true)
                                        setSelectedPlan(plan)
                                    } else {
                                        toast('Wittyworkbooks', {
                                            description:
                                                'Log into your account to subscribe',
                                        })
                                        router.push('/auth/login')
                                    }
                                }}
                                disabled={
                                    !!user?.uid &&
                                    subscription?.isSubscribed &&
                                    subscription?.plan_name ==
                                        plan.name
                                }
                            >
                                {!!user?.uid &&
                                subscription?.isSubscribed &&
                                subscription?.plan_name == plan.name
                                    ? 'Subscribed'
                                    : 'Subscribe'}
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
                                className="bg-white hover:bg-gray-100 border-2 border-black text-black"
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={() => {
                                    // @here
                                    // subscription logic
                                    handleSubscription()
                                }}
                            >
                                {subscriptionLoader && (
                                    <Loader2 className="text-white h-[1.5rem] w-[1.5rem] animate-spin repeat-infinite" />
                                )}
                                Purchase
                            </Button>
                        </DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
