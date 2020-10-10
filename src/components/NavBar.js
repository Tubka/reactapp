import React from 'react'
// import * as action from '../redux/action.creators'
import Logo from './Logo'
import Menu from './Menu'
import Button from './buttons/Button'
import '../style/navBar.scss'
const NavBar = (state) => {
    return (
        <>
            <nav className='navBar'>
                <Logo />
                 {/* <Button text='Kliknij' style='secondary'/> */}
                <Menu/>
            </nav>
        </>
    )
}
export default NavBar;