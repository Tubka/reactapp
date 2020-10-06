import React, { useState } from 'react';
import ButtonMode from './ButtonMode'
import {MenuItems} from './MenuItems'

const Menu = () => {
    const [menu, setMenu] = useState(false)
    
    const handleClickMenu = () => {
        setMenu(!menu)
        console.log(menu)
    }

    return (
        <>
        <button onClick={handleClickMenu}>{menu? 'Hide': 'Menu'}</button>
        {menu? (
            <menu>
                <ul>            
        {MenuItems.map(el => <li><a href={el.url} >{el.title}</a></li>)}
                    <li>Dark mode <ButtonMode /></li>
                </ul>
            </menu>
            ) : null}
        </>
    )
}

export default Menu