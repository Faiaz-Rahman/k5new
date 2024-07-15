'use client'

import React, { useState } from 'react'
import Input from '../_components/Input'
import Button from '../_components/Button'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const [showPass, setShowpass] = useState<boolean>(false)

    return (
        <div
            className="pt-24 h-screen w-screen
            flex items-center justify-center flex-col
        "
        >
            <div
                className="text-black font-semibold 
                text-[1.5rem]"
            >
                Sign In
            </div>
            <div
                className="text-[--login-text-color] font-normal
                text-[.8rem]
            "
            >
                Welcome back! Please, enter your details
            </div>

            <Input
                label="Email"
                type="email"
                placeholder="Email"
                inputStyle="w-full text-[.8rem] h-10
                        outline-none border border-gray-200
                        pl-4 rounded-md"
                labelStyle="text-[--login-text-color] font-normal
                text-[.8rem] text-left"
                wrapperStyle="w-4/6 mt-5"
                // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Password"
                type="password"
                placeholder="Password"
                inputStyle="w-full text-[.8rem] h-10
                        outline-none 
                        pl-4 rounded-md"
                labelStyle="text-[--login-text-color] font-normal
                text-[.8rem] text-left"
                wrapperStyle="w-4/6 mt-3"
                // onChange={(e) => setEmail(e.target.value)}
            >
                <div
                    className="w-8 h-full flex
                    items-center"
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
                wrapperTStyle={'rounded-md w-4/6'}
                wrapperStyle={{
                    marginTop: 25,
                }}
                title="Log In"
                onPress={() => {
                    console.log('Log In')
                }}
            />
        </div>
    )
}
