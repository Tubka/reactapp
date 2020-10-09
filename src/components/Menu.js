import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ButtonMode from './ButtonMode'
import {MenuItems} from './MenuItems'
import { Button } from '../style/globalStyle'
const Menu = () => {
    const [menu, setMenu] = useState(false)
    
    const handleClickMenu = () => {
        setMenu(!menu)
    }

    const closeMenu = () => {
        setMenu(false)
    }

    return (
        <>
        <Button onClick={handleClickMenu}>{menu? 'Hide menu': 'Menu'}</Button>
        {menu? (
            <menu>
                <ul>            
                    {MenuItems.map(item => <li><Link to={item.url} onClick={closeMenu}>{item.title}</Link></li>)}
                    <li>Dark mode<ButtonMode /></li>
                </ul>
            </menu>
            ) : null}
        </>
    )
}

export default Menu