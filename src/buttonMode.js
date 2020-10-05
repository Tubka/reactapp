import React, { useEffect,  } from 'react'
import { useDispatch, connect } from 'react-redux'
import * as action from './redux/action.creators'
// import { ThemeProvider } from 'styled-components';

const root = document.documentElement;

// localStorage.getItem('darkMode')? localStorage.setItem('darkMode', true) : localStorage.setItem('darkMode', false)


const ButtonMode = (state) => {
    const dispatch = useDispatch()
    const darkMode = (state) => {
        console.log('2')
        console.log(state.state.reducer.darkMode, 'darkMode function // why i have undefinde reducer') 
        root.style.setProperty('--mainContrastColor', localStorage.getItem('darkMode')==='true'? '#222222':'#929292');
        root.style.setProperty('--mainColor', localStorage.getItem('darkMode')==='true'? '#929292': '#222222');
    }
    
    useEffect(() => {
        if(localStorage.getItem('darkMode')==='true') {
            dispatch(action.reduxChangeMode(true)) 
        } else dispatch(action.reduxChangeMode(false)); 
        // console.log(localStorage.getItem('darkMode')==='true', 'getItem', '1')
        
    }, [])

    useEffect(()=>{ 
        darkMode(state)
    })
    
    const handleChangeMode = () => {
        // const asd = !state.state.reducer.darkMode
        dispatch(action.reduxChangeMode(!state.state.reducer.darkMode));
        localStorage.setItem('darkMode', !state.state.reducer.darkMode)
        darkMode(state)
        // console.log(state.state.reducer.darkMode)
    }

    return (
    <button className='button' onClick={handleChangeMode}>{state.state.reducer.darkMode?`Change on light`:`Change on dark`}</button>
        // <button className={state.state.reducer.darkMode? 'dark': 'light'} onClick={handleChangeMode}>{state.state.reducer.darkMode?'Change on DarkMode': 'Change on LightMode'}</button>
    )
}

const mapStateToProps = state => ({
    state: state
})


export default connect(mapStateToProps)(ButtonMode)