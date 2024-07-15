import React, { ChangeEventHandler } from 'react'

interface InputProps {
    label: string
    placeholder: string
    type?: string
    wrapperStyle?: string
    labelStyle?: string
    inputStyle?: string
    children?: React.ReactNode
    onChange?: () => void
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
        <div className={wrapperStyle}>
            <p className={labelStyle}>{label}</p>
            <div
                className={`flex items-center mt-2
                    rounded-md h-10 overflow-hidden
                ${
                    children
                        ? 'border border-gray-200'
                        : 'border-none'
                }    
            `}
            >
                <input
                    type={type}
                    className={inputStyle}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {children}
            </div>
        </div>
    )
}
