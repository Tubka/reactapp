import React, { useState } from 'react';
import ButtonMode from './ButtonMode'
const Menu = () => {
    const [menu, setMenu] = useState(false)
    
    const handleClickMenu = () => {
        setMenu(!menu)
    }

    return (
        menu? (
        <menu>
            <button onClick={handleClickMenu}>Hidden menu</button>
            <ul>            
                <li><a href="#">Moje konto</a></li>
                <li><a href="#">Ustawienia</a></li>
                <li><a href="#">Wiadomości</a></li>
                <li>Dark mode <ButtonMode /></li>
            </ul>
        </menu>
        ) : (
            <button onClick={handleClickMenu}>Menu</button>
        )
    )
}

export default Menu