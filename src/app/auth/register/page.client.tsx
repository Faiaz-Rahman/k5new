'use client'

import React, { useState } from 'react'

import { motion } from 'framer-motion'
import Button from '../../_components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import Image from 'next/image'
import Input from '../../_components/Input'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import Education from '../../../assets/education.png'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/lib/store'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import {
    updateIsSocialLogin,
    updateUser,
} from '@/lib/slices/authSlice'
import { useRouter } from 'next/navigation'
import { Session } from 'next-auth'

// import { useSession } from 'next-auth/react'

interface RegisterProps {
    doSignIn: (signInType: string) => void
    session: Session | null
}

export default function Register({
    doSignIn,
    session,
}: RegisterProps) {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [showPass, setShowpass] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [sessionState, setSessionState] = useState<Session | null>(
        session
    )

    const [confPass, setConfPass] = useState<string>('')
    const [showConfpass, setShowConfpass] = useState<boolean>(false)

    const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const onPressRegister = async () => {
        if (!email || !pass || !confPass) {
            alert('Please, fill all the fields.')
        } else if (!agreeToTerms) {
            alert('You must agree to terms, policies and fees.')
        } else {
            if (pass !== confPass) {
                alert('Password and Confirm Password does not match.')
            } else {
                setLoading(true)

                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    pass
                )
                    .then((userCredential) => {
                        dispatch(
                            updateUser({
                                user: userCredential.user,
                                isLoggedIn: true,
                            })
                        )
                        localStorage.setItem(
                            'user',
                            JSON.stringify(userCredential.user)
                        )
                        localStorage.setItem('isLoggedIn', 'true')
                        setLoading(false)
                        router.push('/')
                    })
                    .catch((error) => {
                        alert(JSON.stringify(error.code))
                    })
            }
        }
    }

    // React.useEffect(() => {
    //     if (session?.user) {
    //         console.log(
    //             'got session from the user here =>',
    //             session?.user
    //         )
    //         dispatch(
    //             updateUser({
    //                 user: session?.user,
    //                 isLoggedIn: true,
    //             })
    //         )
    //         dispatch(updateIsSocialLogin(true))
    //         router.push('/')
    //     }
    // }, [session])

    return (
        <div
            className="pt-24 h-screen w-screen
        
            lg:flex lg:pt-40 lg:w-screen lg:h-auto lg:items-center
          "
        >
            <div
                className="w-full h-full justify-center 
                items-center 
                flex flex-col

                lg:w-3/6
            "
            >
                <motion.div
                    className="text-black font-semibold 
                        text-[1.5rem] duration-50
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
                        delay: 0.25,
                    }}
                >
                    Create your account
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
                    Let&apos;s get started with your 7 days free trial
                </motion.div>

                <Button
                    key={`google_login_button`}
                    wrapperTStyle={`flex justify-center
                    items-center border-2 border-[--button-primary]
                    bg-white w-4/6 mt-6 

                    lg:w-[75%]
                `}
                    title="Login with Google"
                    leftIcon={
                        <Image
                            src={require('../../../assets/google_logo.png')}
                            height={18}
                            width={18}
                            alt="google logo"
                            style={{
                                objectFit: 'contain',
                            }}
                            className=""
                        />
                    }
                    onPress={async () => {
                        const updatedSession: any = doSignIn('google')
                        setSessionState(updatedSession)

                        if (session?.user) {
                            console.log(
                                'the session user from onPress Login With Google =>',
                                session?.user
                            )
                        }
                    }}
                />

                <Button
                    key={`facebook_login_button`}
                    wrapperTStyle={`flex justify-center
                    items-center border-2 border-[--button-primary]
                    bg-white w-4/6 mt-2 

                    lg:w-[75%]
                `}
                    title="Login with Facebook"
                    leftIcon={
                        <Image
                            src={require('../../../assets/facebook.png')}
                            height={18}
                            width={18}
                            alt="google logo"
                            style={{
                                objectFit: 'contain',
                            }}
                            className=""
                        />
                    }
                    onPress={async () => {
                        doSignIn('facebook')
                        if (session?.user) {
                            console.log(
                                'the session user from onPress Login With Google =>',
                                session?.user.name
                            )
                        }
                    }}
                />

                <div
                    className="h-10 w-3/6
                    flex items-center justify-center mt-3
                "
                >
                    <div className="w-2/5 h-[1px] bg-gray-200" />
                    <p className="font-medium text-black text-[.8rem] px-4">
                        Or,
                    </p>
                    <div className="w-2/5 h-[1px] bg-gray-200" />
                </div>

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

                <Input
                    key={'login_input_conf_pass'}
                    label="Password"
                    type={showConfpass ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    inputStyle="w-full text-[.8rem] h-10
                        outline-none border-2 border-gray-200
                        pl-4 rounded-md"
                    labelStyle="text-[--login-text-color] font-normal
                        text-[.8rem] text-left"
                    wrapperStyle="w-4/6 mt-3 relative
                        lg:w-[75%]
                    "
                    onChange={(e) => setConfPass(e.target.value)}
                >
                    <div
                        className="w-8 h-full flex
                            items-center absolute right-0 top-0 mt-2"
                        onClick={() => {
                            setShowConfpass((prev) => !prev)
                        }}
                    >
                        {!showConfpass ? (
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

                <div
                    className="text-[--login-text-color] font-normal
                    text-[.8rem] py-2 flex items-center
                    gap-2 w-4/6

                    lg:w-[75%]
                "
                >
                    <input
                        type="checkbox"
                        className="h-4 w-4 accent-[--button-primary]
                        appearance-auto checked:bg-[--button-primary]
                    "
                        checked={agreeToTerms}
                        onChange={() => {
                            setAgreeToTerms((prev) => !prev)
                        }}
                    />
                    <label
                        className="font-semibold text-black"
                        onClick={() => {
                            setAgreeToTerms((prev) => !prev)
                        }}
                    >
                        I agree to the Terms, Policies and Fees.
                    </label>
                </div>

                <Button
                    key={`register_button`}
                    // passing tailwind styles
                    wrapperTStyle={`rounded-md w-4/6 mb-10
                      lg:w-[75%] 
                    `}
                    isLoading={loading}
                    wrapperStyle={{
                        marginTop: 25,
                    }}
                    title="Register"
                    onPress={() => {
                        // console.log('Register')
                        onPressRegister()
                    }}
                />
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
    )
}
