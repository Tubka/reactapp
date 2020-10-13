import React from 'react';
// import * as action from '../redux/action.creators'
import Logo from './Logo';
import Menu from './Menu';
import '../style/navBar.scss';
import { Search } from './Search' ;
const NavBar = () => {
    return (
        <>
            <nav className='navBar'>
                <Logo />
                <Search />
                <Menu />
            </nav>
        </>
    )
}
export default NavBar;