import React, { useEffect,  } from 'react'
import { useDispatch, connect } from 'react-redux'
import * as action from '../redux/action.creators'



const ButtonMode = (state) => {
    const dispatch = useDispatch()

    
    useEffect(() => {
        if(localStorage.getItem('darkMode')==='true') {
            dispatch(action.reduxChangeMode(false)) 
        } else dispatch(action.reduxChangeMode(true)); 
    }, [])

    
    const handleChangeMode = () => {
        dispatch(action.reduxChangeMode(!state.state.reducer.darkMode));
        localStorage.setItem('darkMode', !state.state.reducer.darkMode)
    }
    console.log(state.state.reducer.darkMode)
    return (
        <label class="switch">
            <input type="checkbox" onClick={handleChangeMode} checked={state.state.reducer.darkMode? true: false}/>
            <span class="slider round"></span>
        </label>
    )
}

const mapStateToProps = state => ({
    state: state
})

//{/* <button className='button' onClick={handleChangeMode}>{state.state.reducer.darkMode?`Change on light`:`Change on dark`}</button> */}

export default connect(mapStateToProps)(ButtonMode)