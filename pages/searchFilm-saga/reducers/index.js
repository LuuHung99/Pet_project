import {combineReducers} from 'redux';
import {seachMoviesReducer} from './search-movie';

const rootReducer = combineReducers({
    searchMovie: seachMoviesReducer
})

export default rootReducer;