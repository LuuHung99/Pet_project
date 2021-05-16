import * as types from '../actions/types';

const initialState = {
    loading: false,
    new: [],
    error: null,
    remote: [],
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_DATA_NEWS: 
            return {
                ...state,
                loading: action.loading
            }
        case types.STOP_DATA_NEWS: 
            return {
                ...state,
                loading: action.loading
            }           
        case types.GET_DATA_NEWS_SUCCESS: 
            return {
                ...state,
                new: action.news,
                error: null
            }
        case types.GET_DATA_NEWS_FAIL: 
            return {
                ...state,
                new: [],
                error: action.error
            }
        case types.REMOTE_ITEMS_NEWS: 
            return {
                ...state,
                new: action.news.filter((index) => index.objectID !== action.payload),
                error: null,
            }
        default:
            return state;
    }
}