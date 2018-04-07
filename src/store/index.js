import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import * as production from '@/pages/product/reducer';

let store = createStore(
    combineReducers({...production}),
    applyMiddleware(thunk)
)
export default store