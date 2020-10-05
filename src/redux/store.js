import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const middlewares = [];

const rootReducer = combineReducers({ reducer })
export default createStore(rootReducer, composeWithDevTools(...middlewares))