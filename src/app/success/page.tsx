'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import LoadingUI from '../loading'

import { CheckCircle } from 'lucide-react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { updateSubscriptionStatus } from '@/lib/slices/authSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/utils/firebase'
import { Poltawski_Nowy } from 'next/font/google'

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const loadOneTime = useRef<boolean>(false)
    const [status, setStatus] = useState<string>('loading')

    const session_id = searchParams.get('session_id')

    const { subscription, user } = useSelector(
        (state: RootState) => state.auth
    )
    const dispatch = useDispatch()

    const validateSession = async () => {
        const resp = await fetch('/api/check-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session_id }),
        })
        const respJson = await resp.json()
        if (!respJson?.error) {
            setStatus('success')

            if (user?.uid) {
                const docRef = doc(db, 'users', user?.uid)

                await updateDoc(docRef, {
                    subscription: true,
                    subscriptionDetails: {
                        plan_name: subscription?.plan_name,
                        plan_price: subscription?.plan_price,
                    },
                })
            }
        } else {
            setStatus('failed')
            dispatch(
                updateSubscriptionStatus({
                    isSubscribed: false,
                    plan_name: '',
                    plan_price: '',
                })
            )
        }
    }

    console.log('the subscription value from store =>', subscription)

    React.useEffect(() => {
        if (!loadOneTime.current) {
            validateSession()

            loadOneTime.current = true
        }
    }, [])

    if (status == 'loading') {
        return <LoadingUI />
    }
    if (status == 'failed') {
        return (
            <div className="w-screen flex justify-center">
                Failed to subscribe!
            </div>
        )
    }

    return (
        <div
            className="flex flex-col w-screen pl-[20px] pt-24 pr-[20px] h-screen
                lg:pl-24 lg:flex-row lg:pt-40 lg:pr-24 justify-center items-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full max-w-md"
            >
                <Card className="shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                    <CardHeader>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 150,
                                damping: 10,
                            }}
                        >
                            <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
                        </motion.div>
                        <CardTitle className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
                            Subscription Successful!
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                            You are now subscribed to the{' '}
                            <span className="font-medium text-gray-900 dark:text-white">
                                {subscription?.plan_name}
                            </span>{' '}
                            plan.
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            ${subscription?.plan_price} /{' '}
                            {subscription?.plan_price
                                ? ' month'
                                : ' 6 months'}
                        </p>
                        <Button
                            onClick={() => router.push('/')}
                            className="mt-4"
                        >
                            Okay
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
