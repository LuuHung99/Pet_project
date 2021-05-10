import * as types from '../actions/type';
// import {data} from '../services/index';

const initialState = {
    loading: false,
    viruts: [],
    error: null
}

export const conronaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_GET_DATA:
            return {...state, loading: action.loading}
        case types.GET_DATA_CORONA_SUCCESS:
            return {
                ...state, 
                loading: false,
                viruts: action.corona,
                error: null
            }
        case types.GET_DATA_CORONA_FAIL:
            return {
                ...state,
                loading: false,
                viruts: [],
                error: action.error
            }
        default:
            return state
    }
}
