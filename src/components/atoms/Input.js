import React from 'react'

export const Input = ({inputClass, type, inputFor, change}) => {
    return (
        <input onChange={change} className={inputClass} type={type} htmlFor={inputFor}/>
    )
}