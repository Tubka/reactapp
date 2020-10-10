import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ButtonMode from './ButtonMode'
import {MenuItems} from './MenuItems'


const Menu = () => {
    const [menu, setMenu] = useState(false)
    
    const handleClickMenu = () => {
        setMenu(!menu)
    }

    const handleCloseMenu = () => {
        setMenu(false)
    }

    return (
        <>
        <button onClick={handleClickMenu}>{menu? 'Hide menu': 'Menu'}</button>
        <menu>
            <ul>            
                {MenuItems.map(item => <li><Link className='red' to={item.url} onClick={handleCloseMenu}>{item.title}</Link></li>)}
                <li className='menu__darkmode'>Dark mode<ButtonMode /></li>
            </ul>
        </menu>
        </>
    )
}

export default Menu