import * as types from '../actions/types';

const initialState = {
    loading: false,
    new: [],
    error: null,
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
            const idx = action.id;
            //Lay id bi xoa
            const newId = state.new.filter((e) => e.objectID === idx)[0];
            //Lay tong new con lai
            const totalNew = state.new.filter((e) => e.objectID !== newId);
            return {
                ...state,
                new: totalNew,  
                error: null,
            }
        default:
            return state;
    }
}