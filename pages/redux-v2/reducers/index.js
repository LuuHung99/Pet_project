import {combineReducers} from 'redux';
import {conronaReducer} from './corona';

const rootReducer = combineReducers ({
    corona: conronaReducer
})

export default rootReducer;