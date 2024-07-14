'use client'

import React, { useState } from 'react'
import Input from '../_components/Input'

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

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
                        pl-4 rounded-md mt-2"
                labelStyle="text-[--login-text-color] font-normal
                text-[.8rem] text-left"
                wrapperStyle="w-3/6 mt-5"
                // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Password"
                type="password"
                placeholder="Password"
                inputStyle="w-full text-[.8rem] h-10
                        outline-none border border-gray-200
                        pl-4 rounded-md mt-2"
                labelStyle="text-[--login-text-color] font-normal
                text-[.8rem] text-left"
                wrapperStyle="w-3/6 mt-3"
                // onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    )
}
