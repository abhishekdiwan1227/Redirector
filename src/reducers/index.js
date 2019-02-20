import {combineReducers} from 'redux';
import user from './userReducer';
import search from './searchReducer';

var rootReducer = combineReducers({
    user,
    search
})

export default rootReducer;