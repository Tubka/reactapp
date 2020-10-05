import { actionTypes } from './action.types';

const initialState = {
}

const reducer = (state = initialState, action) => {
    console.log(action, '3')
    switch (action.type) {
        case actionTypes.CHANGE_MODE:
            console.log(action.darkModeBool, 'sprawdzmy to')
            return ({
                ...state,
                darkMode: action.darkModeBool
            })
        default:
            // console.log('wszedlem w default')
            return state
    }
}
export default reducer