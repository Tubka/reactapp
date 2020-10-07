import React, { useState } from 'react';
import ButtonMode from './ButtonMode'
import {MenuItems} from './MenuItems'
import { Button } from '../style/globalStyle'
const Menu = () => {
    const [menu, setMenu] = useState(false)
    
    const handleClickMenu = () => {
        setMenu(!menu)
        console.log(menu)
    }

    return (
        <>
        <Button onClick={handleClickMenu}>{menu? 'Hide menu': 'Menu'}</Button>
        {menu? (
            <menu>
                <ul>            
                    {MenuItems.map(item => <li><a href={item.url} >{item.title}</a></li>)}
                    <li><a>Dark mode<ButtonMode /></a></li>
                </ul>
            </menu>
            ) : null}
        </>
    )
}

export default Menu