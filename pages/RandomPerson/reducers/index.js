import {combineReducers} from 'redux';
import {getDataPersonReducer} from './person-reducer';

const rootReducer = combineReducers({
    persons: getDataPersonReducer
    //Co nhieu reducer thi viet o day
})

export default rootReducer;