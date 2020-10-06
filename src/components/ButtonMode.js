import React, { useEffect, } from 'react'
import { useDispatch, connect } from 'react-redux'
import * as action from '../redux/action.creators'



const ButtonMode = (state) => {
    const dispatch = useDispatch()

    const handleChangeMode = () => {
        dispatch(action.reduxChangeMode(!state.state.reducer.darkMode));
        localStorage.setItem('darkMode', !state.state.reducer.darkMode)
    }

    console.log('montowanie button, ', state.state.reducer.darkMode)
    console.log('local, ', localStorage.getItem('darkMode'))
    return (
        <label className="switch">
            <input type="checkbox" onChange={handleChangeMode} checked={state.state.reducer.darkMode ? true : false} />
            <span className="slider round"></span>
        </label>
    )
}

const mapStateToProps = state => ({
    state: state
})

//{/* <button className='button' onClick={handleChangeMode}>{state.state.reducer.darkMode?`Change on light`:`Change on dark`}</button> */}

export default connect(mapStateToProps)(ButtonMode)