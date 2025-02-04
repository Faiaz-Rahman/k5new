'use client'

import React, { Suspense, useState } from 'react'
import Input from '../../_components/Input'
import Button from '../../_components/Button'

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { motion } from 'framer-motion'

import Education from '../../../assets/education.png'

import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { RootState, useAppDispatch } from '@/lib/store'
import { updateUser } from '@/lib/slices/authSlice'
import { useRouter } from 'next/navigation'

export default function LoginClient() {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const router = useRouter()

    const dispatch = useAppDispatch()

    const [showPass, setShowpass] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const onPressLogin = async () => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(
                    'user credentials =>',
                    userCredential.user
                )

                dispatch(
                    updateUser({
                        user: userCredential.user,
                        isLoggedIn: true,
                    })
                )

                localStorage.setItem('isLoggedIn', 'true')

                setLoading(false)
                router.push('/')
            })
            .catch((error) => {
                console.log(
                    'error from onPressLogin =>',
                    JSON.stringify(error)
                )
                setLoading(false)
                alert(
                    JSON.stringify(
                        'One or, both of your credentials are in incorrect'
                    )
                )
            })
    }

    return (
        <Suspense fallback={<p>Loading</p>}>
            <div
                className="pt-24 h-screen w-screen
        
            lg:flex lg:pt-40
          "
            >
                <div
                    className="h-full w-full
                    flex items-center justify-center flex-col
                    
                    lg:w-3/6
                "
                >
                    <motion.div
                        className="text-black font-semibold 
                    text-[1.5rem] duration-50"
                        initial={{
                            x: -20,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            bounce: 0.7,
                            type: 'spring',
                            delay: 0.25,
                        }}
                    >
                        Sign In
                    </motion.div>
                    <motion.div
                        className="text-[--login-text-color] font-normal
                    text-[.8rem] 
                "
                        initial={{
                            x: -20,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            bounce: 0.7,
                            type: 'spring',
                            delay: 0.5,
                        }}
                    >
                        Welcome back! Please, enter your details
                    </motion.div>

                    <Input
                        key={'login_input_email'}
                        label="Email"
                        type="email"
                        placeholder="Email"
                        inputStyle="w-full text-[.8rem] h-10
                        outline-none border-2 border-gray-200
                        pl-4 rounded-md"
                        labelStyle="text-[--login-text-color] font-normal
                        text-[.8rem] text-left"
                        wrapperStyle="w-4/6 mt-5
                        lg:w-[75%]
                        2xl:w-[55%]
                    "
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        key={'login_input_pass'}
                        label="Password"
                        type={showPass ? 'text' : 'password'}
                        placeholder="Password"
                        inputStyle="w-full text-[.8rem] h-10
                        outline-none border-2 border-gray-200
                        pl-4 rounded-md"
                        labelStyle="text-[--login-text-color] font-normal
                        text-[.8rem] text-left"
                        wrapperStyle="w-4/6 mt-3 relative
                        lg:w-[75%] 
                        2xl:w-[55%]
                    "
                        onChange={(e) => setPass(e.target.value)}
                    >
                        <div
                            className="w-8 h-full flex
                            items-center absolute right-0 top-0 mt-2"
                            onClick={() => {
                                setShowpass((prev) => !prev)
                            }}
                        >
                            {!showPass ? (
                                <FontAwesomeIcon
                                    icon={faEye}
                                    className="text-gray-400 text-[14px]"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faEyeSlash}
                                    className="text-gray-400 text-[14px]"
                                />
                            )}
                        </div>
                    </Input>

                    <Button
                        // passing tailwind styles
                        wrapperTStyle={`rounded-md w-4/6
                            lg:w-[75%]

                            2xl:w-[55%]
                        `}
                        isLoading={loading}
                        wrapperStyle={{
                            marginTop: 25,
                            height: 40,
                        }}
                        title="Log In"
                        onPress={() => {
                            if (!email || !pass) {
                                console.log(
                                    'the email is =>',
                                    email,
                                    'the password is =>',
                                    pass
                                )
                                alert('Please fill the fields first!')
                            } else {
                                onPressLogin()
                            }
                        }}
                    />

                    <div
                        className="h-10 flex justify-center
                    items-center w-4/6
                "
                    >
                        <Link href="/auth/register">
                            <p
                                className="
                            text-black text-[.8rem] font-light
                        "
                            >
                                Not A Member?{' '}
                                <span
                                    className="font-semibold
                                    underline
                                "
                                >
                                    Sign Up
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>

                <div
                    className="hidden
                    
                lg:flex lg:w-3/6
                lg:justify-center lg:items-center
            "
                >
                    <Image
                        src={Education}
                        alt="Graduation"
                        style={{
                            height: '80%',
                            width: '95%',
                            backgroundColor: 'white',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
        </Suspense>
    )
}
