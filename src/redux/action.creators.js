import { actionTypes } from './action.types';

export const reduxChangeMode = (darkModeBool) => {
    return {
        type: actionTypes.CHANGE_MODE,
        darkModeBool
    }
}
