import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../redux/action.creators'



// const ButtonMode = () => {
//     const dispatch = useDispatch()
//     const darkMode = useSelector(state => state.reducer.darkMode)
//     console.log(darkMode)
//     const handleChangeMode = () => {
//         dispatch(action.reduxChangeMode(!darkMode));
//         localStorage.setItem('darkMode', !darkMode)
//     }
//     return (
//         <label className="switch">
//             <input type="checkbox" onChange={handleChangeMode} checked={darkMode ? true : false} />
//             <span className="slider round"></span>
//         </label>
//     )
// }

// export default ButtonMode

export function setColorModeClass(colorMode) {
    if (colorMode) {
        document.querySelector('html').classList.add('darkTheme');
    } else {
        document.querySelector('html').classList.remove('darkTheme');
    }
}

const ButtonMode = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.reducer.darkMode);
    
    useEffect(()=>{
        console.log('wykon');
        const darkModeLocalStorage = localStorage.getItem('darkMode')==='true'? true: false;
        setColorModeClass(darkModeLocalStorage);
    }, []) 
    
    const handleChangeMode = () => {
        dispatch(action.reduxChangeMode(!darkMode));
        localStorage.setItem('darkMode', !darkMode);
        setColorModeClass(!darkMode);
    }
    return (
        <label className="switch">
            <input type="checkbox" onChange={handleChangeMode} checked={darkMode ? true : false} />
            <span className="slider round"></span>
        </label>
    )
}

export default ButtonMode