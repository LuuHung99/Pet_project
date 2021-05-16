import {combineReducers} from 'redux';
import {newsReducer} from './news-reducers';

const rootReducer = combineReducers({
    searchNews: newsReducer
})

export default rootReducer;