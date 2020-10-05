import React, { useEffect,  } from 'react'
import { useDispatch, connect } from 'react-redux'
import * as action from '../redux/action.creators'
import Logo from './Logo'
import Menu from './Menu'
const NavBar = (state) => {

    return (
        <>
            <nav className='navBar'>
                <Logo />
                <Menu/>
            </nav>
        </>
    )
}

const mapStateToProps = state => ({
    state: state
})


export default connect(mapStateToProps)(NavBar)