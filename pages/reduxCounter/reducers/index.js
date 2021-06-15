import {combineReducers} from 'redux';
import  {counterReducer} from './counter';

const rootReducer = combineReducers({ //Gop nhieu reducer thanh 1
    counter: counterReducer
})

export default rootReducer;
// Sau nay se truyen luu vao store