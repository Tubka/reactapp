import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Input } from './atoms/Input'

export const Search = () => {

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue])

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleClickSearch = () => {
        console.log(inputValue);
    }

    const hand = () => {
        console.log('asd');
    }
    return (
        <>
            <label onChange={(e) => handleInputChange(e)} className='search' htmlFor="search">
                <Input inputClass='search__input' type='text' inputFor='search' />
                <FaSearch onClick={handleClickSearch} className='search__icon'/>
            </label>
        </>
    )
}
