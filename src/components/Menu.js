import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ButtonMode from './ButtonMode'
import {MenuItems} from './lists/MenuItems';
import { FaBars, FaAngleDoubleRight } from 'react-icons/fa'

const Menu = () => {
    const [menu, setMenu] = useState(false)

    useEffect(()=> {
        menu? (
            document.querySelector('menu').classList.remove('closed')
        ):(
            document.querySelector('menu').classList.add('closed') )
    }, [menu]);
    
    const handleClickMenu = () => {
        setMenu(!menu);
    }

    const handleCloseMenu = () => {
        setMenu(false);
    }

    return (
        <>
            <button className='menu__button' onClick={handleClickMenu}>{menu? <FaAngleDoubleRight className='menu__icon' />: <FaBars className='menu__icon'/>}</button>
            <menu className="menu closed">
                <ul className='menu__list'>            
                    {MenuItems.map(item => <li key={item.id} className='menu__item'><Link className='menu__link' to={item.url} onClick={handleCloseMenu}>{item.title}</Link></li>)}
                    <li className='menu__item menu__darkmode'>Dark mode<ButtonMode /></li>
                </ul>
            </menu>
        </>
    )
}

export default Menu