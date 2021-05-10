import * as types from '../actions/types';

const initialState = {
    loading: false,
    dataMovies: [],
    error: null,
}

export const seachMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_DATA_MOVIES:
            return {
                ...state,
                loading: action.loading,
            }
        case types.STOP_DATA_MOVIES:
            return {
                ...state,
                loading: action.loading,
            }
        case types.SEARCH_DATA_MOVIES_SUCCESS:
            return {
                ...state,
                dataMovies: action.movies,
                error: null
            }
        case types.SEARCH_DATA_MOVIES_FAIL:
            return {
                ...state,
                dataMovies: [],
                error: action.error
            }
        default:
            return state;
    }
}