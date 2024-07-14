import React, { ChangeEventHandler } from 'react'

interface InputProps {
    label: string
    placeholder: string
    type?: string
    wrapperStyle?: string
    labelStyle?: string
    inputStyle?: string
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
}: InputProps) {
    return (
        <div className={wrapperStyle}>
            <p className={labelStyle}>{label}</p>
            <input
                type="email"
                className={inputStyle}
                placeholder="Email"
                onChange={onChange}
            />
        </div>
    )
}
