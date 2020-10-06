import { actionTypes } from './action.types';

const initialState = {
    darkMode: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MODE:
            console.log(action.darkModeBool, 'sprawdzmy to')
            return ({
                ...state,
                darkMode: action.darkModeBool
            })
        default:
            return state
    }
}
export default reducer