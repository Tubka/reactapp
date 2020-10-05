import React, { useEffect,  } from 'react'
import { useDispatch, connect } from 'react-redux'
import * as action from './redux/action.creators'


const root = document.documentElement;


const ButtonMode = (state) => {
    const dispatch = useDispatch()

    
    useEffect(() => {
        if(localStorage.getItem('darkMode')==='true') {
            dispatch(action.reduxChangeMode(true)) 
        } else dispatch(action.reduxChangeMode(false)); 
    }, [])

    
    const handleChangeMode = () => {
        dispatch(action.reduxChangeMode(!state.state.reducer.darkMode));
        localStorage.setItem('darkMode', !state.state.reducer.darkMode)
    }

    return (
    <button className='button' onClick={handleChangeMode}>{state.state.reducer.darkMode?`Change on light`:`Change on dark`}</button>
    )
}

const mapStateToProps = state => ({
    state: state
})


export default connect(mapStateToProps)(ButtonMode)