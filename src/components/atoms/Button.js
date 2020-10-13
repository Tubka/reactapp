import React from 'react'
// import styled, { createGlobalStyle } from 'styled-components';

export const Button = ({text, style, buttonClass, handButtonClick}) => {

    return (
        <button className={buttonClass} onClick={handButtonClick}>{text}</button>
    )
}
