import React, { ChangeEventHandler, useState } from 'react'

interface InputProps {
    label: string
    placeholder: string
    type?: string
    wrapperStyle?: string
    labelStyle?: string
    inputStyle?: string
    children?: React.ReactNode
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
    wrapperStyle,
    labelStyle,
    label,
    placeholder,
    inputStyle,
    type,
    onChange,
    children,
}: InputProps) {
    return (
        <div className={`${wrapperStyle}`}>
            <p className={labelStyle}>{label}</p>

            <input
                type={type}
                className={`${inputStyle} 
                    focus:border-[--button-primary]
                    focus:border-2
                `}
                placeholder={placeholder}
                onChange={onChange}
            />
            {children}
        </div>
    )
}
